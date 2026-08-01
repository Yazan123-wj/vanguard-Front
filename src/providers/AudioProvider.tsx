'use client';

import { usePathname } from 'next/navigation';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';

/** Only written when the user explicitly mutes. Absence = sound on. */
const MUTE_KEY = 'vanguard-audio-pref';
const LEGACY_MUTE_KEY = 'vanguard-audio-muted';
const AMBIENT_SRC = '/audio/theme.mp3';
const PLAY_VOLUME = 0.4;

function isAdminPath(pathname: string | null) {
  return Boolean(pathname?.startsWith('/admin'));
}

type AudioContextValue = {
  /** User preference — on by default. */
  muted: boolean;
  /** True once the bed is actually audible. */
  audible: boolean;
  ready: boolean;
  toggleMute: () => void;
  unlock: () => void;
};

const AudioCtx = createContext<AudioContextValue | null>(null);

export function useSiteAudio() {
  const context = useContext(AudioCtx);
  if (!context) {
    throw new Error('useSiteAudio must be used within AudioProvider');
  }
  return context;
}

type AudioProviderProps = {
  children: ReactNode;
};

/**
 * Ambient bed defaults to ON (no localStorage key = on).
 *
 * Browsers usually block unmuted autoplay, so we:
 * 1) try unmuted play immediately
 * 2) fall back to muted “hot” playback
 * 3) unmute on the first user gesture
 *
 * After unlock, mute uses volume=0 so unmute stays instant.
 */
export function AudioProvider({ children }: AudioProviderProps) {
  const pathname = usePathname();
  const adminRoute = isAdminPath(pathname);
  const [muted, setMuted] = useState(false);
  const [audible, setAudible] = useState(false);
  const [ready, setReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const mutedRef = useRef(false);
  const audibleRef = useRef(false);
  const unlockedRef = useRef(false);
  const adminRef = useRef(adminRoute);

  useEffect(() => {
    mutedRef.current = muted;
  }, [muted]);

  useEffect(() => {
    audibleRef.current = audible;
  }, [audible]);

  useEffect(() => {
    adminRef.current = adminRoute;
  }, [adminRoute]);

  useEffect(() => {
    try {
      localStorage.removeItem(LEGACY_MUTE_KEY);
      const stored = localStorage.getItem(MUTE_KEY);
      // Default ON — only an explicit "muted" preference turns sound off.
      const next = stored === 'muted';
      setMuted(next);
      mutedRef.current = next;
      if (!next) localStorage.removeItem(MUTE_KEY);
    } catch {
      setMuted(false);
      mutedRef.current = false;
    }
  }, []);

  const markAudible = useCallback(() => {
    setAudible(true);
    audibleRef.current = true;
    setReady(true);
    unlockedRef.current = true;
  }, []);

  /**
   * MUST stay synchronous (no await before unmute) so it counts as a gesture.
   */
  const unlockSync = useCallback(() => {
    if (adminRef.current || mutedRef.current) return false;
    const audio = audioRef.current;
    if (!audio) return false;

    audio.muted = false;
    audio.volume = PLAY_VOLUME;
    unlockedRef.current = true;

    if (!audio.paused) {
      markAudible();
      return true;
    }

    const playAttempt = audio.play();
    if (playAttempt) {
      void playAttempt
        .then(() => {
          if (adminRef.current) {
            audio.muted = true;
            audio.volume = 0;
            audio.pause();
            setAudible(false);
            audibleRef.current = false;
            return;
          }
          markAudible();
        })
        .catch(() => {
          audio.muted = true;
          setAudible(false);
          audibleRef.current = false;
          unlockedRef.current = false;
        });
    } else {
      markAudible();
    }
    return true;
  }, [markAudible]);

  const unlock = useCallback(() => {
    unlockSync();
  }, [unlockSync]);

  useEffect(() => {
    if (adminRoute) {
      const existing = audioRef.current;
      if (existing) {
        existing.pause();
        existing.muted = true;
        existing.volume = 0;
        existing.src = '';
        audioRef.current = null;
      }
      unlockedRef.current = false;
      setAudible(false);
      audibleRef.current = false;
      return;
    }

    const audio = new Audio(AMBIENT_SRC);
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = PLAY_VOLUME;
    // iOS inline playback — attribute only (not on HTMLAudioElement typings).
    audio.setAttribute('playsinline', '');
    audio.setAttribute('webkit-playsinline', '');
    audioRef.current = audio;

    const markReady = () => setReady(true);
    audio.addEventListener('canplaythrough', markReady);
    void audio.load();

    const start = async () => {
      if (mutedRef.current) {
        // Preference off — keep decoder warm silently.
        audio.muted = true;
        audio.volume = 0;
        try {
          await audio.play();
          markReady();
        } catch {
          // ignore
        }
        return;
      }

      // Default ON: try real (unmuted) autoplay first.
      audio.muted = false;
      audio.volume = PLAY_VOLUME;
      try {
        await audio.play();
        markAudible();
        return;
      } catch {
        // Autoplay blocked — keep playing muted until a gesture unlocks.
        audio.muted = true;
        try {
          await audio.play();
          markReady();
        } catch {
          // ignore
        }
      }
    };

    void start();

    return () => {
      audio.removeEventListener('canplaythrough', markReady);
      audio.pause();
      audio.src = '';
      if (audioRef.current === audio) audioRef.current = null;
    };
  }, [adminRoute, markAudible]);

  useEffect(() => {
    if (adminRoute) return;

    const remove = () => {
      window.removeEventListener('pointerdown', onGesture, true);
      window.removeEventListener('keydown', onGesture, true);
      window.removeEventListener('touchstart', onGesture, true);
      window.removeEventListener('wheel', onGesture, true);
      window.removeEventListener('click', onGesture, true);
    };

    function onGesture() {
      if (adminRef.current || mutedRef.current || audibleRef.current) {
        remove();
        return;
      }
      unlockSync();
      if (audibleRef.current) remove();
    }

    const opts: AddEventListenerOptions = { capture: true, passive: true };
    window.addEventListener('pointerdown', onGesture, opts);
    window.addEventListener('keydown', onGesture, true);
    window.addEventListener('touchstart', onGesture, opts);
    window.addEventListener('wheel', onGesture, opts);
    window.addEventListener('click', onGesture, opts);

    return remove;
  }, [adminRoute, unlockSync]);

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;

    // ON preference but silent → this click starts sound (do not mute).
    if (!mutedRef.current && !audibleRef.current) {
      unlockSync();
      return;
    }

    if (mutedRef.current) {
      mutedRef.current = false;
      setMuted(false);
      try {
        localStorage.removeItem(MUTE_KEY);
      } catch {
        // ignore
      }

      if (!audio) {
        unlockSync();
        return;
      }

      audio.muted = false;
      audio.volume = PLAY_VOLUME;

      if (!audio.paused) {
        markAudible();
        return;
      }

      const playAttempt = audio.play();
      if (playAttempt) {
        void playAttempt.then(markAudible).catch(() => {
          setAudible(false);
          audibleRef.current = false;
        });
      } else {
        markAudible();
      }
      return;
    }

    // Mute — volume=0 keeps playback warm for instant unmute.
    mutedRef.current = true;
    setMuted(true);
    audibleRef.current = false;
    setAudible(false);
    try {
      localStorage.setItem(MUTE_KEY, 'muted');
    } catch {
      // ignore
    }
    if (audio) {
      audio.volume = 0;
      audio.muted = false;
      if (audio.paused && unlockedRef.current) {
        void audio.play().catch(() => {});
      }
    }
  }, [markAudible, unlockSync]);

  const value = useMemo(
    () => ({ muted, audible, ready, toggleMute, unlock }),
    [muted, audible, ready, toggleMute, unlock],
  );

  return <AudioCtx.Provider value={value}>{children}</AudioCtx.Provider>;
}
