'use client';

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

const MUTE_KEY = 'vanguard-audio-muted';
const AMBIENT_SRC = '/audio/theme.mp3';
const PLAY_VOLUME = 0.42;

type AudioContextValue = {
  muted: boolean;
  ready: boolean;
  toggleMute: () => void;
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
 * Looping background track from /public/audio/theme.mp3.
 * Starts muted (autoplay policy); mute preference persists in localStorage.
 */
export function AudioProvider({ children }: AudioProviderProps) {
  const [muted, setMuted] = useState(true);
  const [ready, setReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(MUTE_KEY);
      setMuted(stored === null ? true : stored === '1');
    } catch {
      setMuted(true);
    }
  }, []);

  useEffect(() => {
    const audio = new Audio(AMBIENT_SRC);
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 0;
    audioRef.current = audio;

    const onCanPlay = () => setReady(true);
    audio.addEventListener('canplaythrough', onCanPlay);

    return () => {
      audio.removeEventListener('canplaythrough', onCanPlay);
      audio.pause();
      audio.src = '';
      audioRef.current = null;
      if (fadeTimerRef.current) window.clearInterval(fadeTimerRef.current);
    };
  }, []);

  const fadeVolume = useCallback((to: number, ms = 900) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (fadeTimerRef.current) {
      window.clearInterval(fadeTimerRef.current);
      fadeTimerRef.current = null;
    }

    const from = audio.volume;
    const steps = Math.max(1, Math.round(ms / 32));
    let step = 0;

    fadeTimerRef.current = window.setInterval(() => {
      step += 1;
      const t = step / steps;
      audio.volume = from + (to - from) * t;
      if (step >= steps) {
        audio.volume = to;
        if (fadeTimerRef.current) {
          window.clearInterval(fadeTimerRef.current);
          fadeTimerRef.current = null;
        }
        if (to === 0) audio.pause();
      }
    }, 32);
  }, []);

  const ensurePlaying = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (audio.paused) await audio.play();
      setReady(true);
    } catch {
      // Autoplay blocked until a later click.
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (muted) {
      fadeVolume(0, 400);
      return;
    }

    void ensurePlaying().then(() => fadeVolume(PLAY_VOLUME, 1100));
  }, [ensurePlaying, fadeVolume, muted]);

  const toggleMute = useCallback(() => {
    void (async () => {
      await ensurePlaying();
      setMuted((prev) => {
        const next = !prev;
        try {
          localStorage.setItem(MUTE_KEY, next ? '1' : '0');
        } catch {
          // ignore
        }
        return next;
      });
    })();
  }, [ensurePlaying]);

  const value = useMemo(
    () => ({ muted, ready, toggleMute }),
    [muted, ready, toggleMute],
  );

  return <AudioCtx.Provider value={value}>{children}</AudioCtx.Provider>;
}
