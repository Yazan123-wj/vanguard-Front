'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import {
  LOADER_MAX_DURATION,
  LOADER_MIN_DURATION,
} from '@/components/loader/loader.constants';
import { gsap } from '@/lib/gsap';

type ProgressSources = {
  fonts: number;
  images: number;
  three: number;
  window: number;
};

const WEIGHTS: ProgressSources = {
  fonts: 0.25,
  images: 0.25,
  three: 0.2,
  window: 0.3,
};

function combineProgress(sources: ProgressSources) {
  return (
    sources.fonts * WEIGHTS.fonts +
    sources.images * WEIGHTS.images +
    sources.three * WEIGHTS.three +
    sources.window * WEIGHTS.window
  );
}

export function useLoadProgress(isActive: boolean) {
  const [displayProgress, setDisplayProgress] = useState(0);
  const [canExit, setCanExit] = useState(false);

  const sourcesRef = useRef<ProgressSources>({
    fonts: 0,
    images: 0,
    three: 0,
    window: 0,
  });
  const startTimeRef = useRef<number | null>(null);
  const progressProxyRef = useRef({ value: 0 });
  const quickToRef = useRef<gsap.QuickToFunc | null>(null);
  const threeIdleRef = useRef(true);

  const updateTarget = useCallback(() => {
    const raw = combineProgress(sourcesRef.current);
    const target = Math.min(100, Math.round(raw * 100));
    quickToRef.current?.(target);
  }, []);

  useEffect(() => {
    if (!isActive) return;

    progressProxyRef.current.value = 0;
    quickToRef.current = gsap.quickTo(progressProxyRef.current, 'value', {
      duration: 0.45,
      ease: 'power2.out',
      onUpdate: () => {
        setDisplayProgress(Math.round(progressProxyRef.current.value));
      },
    });

    return () => {
      quickToRef.current = null;
    };
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;

    startTimeRef.current = performance.now();
    let cancelled = false;

    const tickExit = () => {
      if (cancelled || startTimeRef.current === null) return;

      const elapsed = (performance.now() - startTimeRef.current) / 1000;
      const raw = combineProgress(sourcesRef.current);
      const assetsReady = raw >= 1;
      const minElapsed = elapsed >= LOADER_MIN_DURATION;
      const maxElapsed = elapsed >= LOADER_MAX_DURATION;

      if ((assetsReady && minElapsed) || maxElapsed) {
        quickToRef.current?.(100);
        setCanExit(true);
      }
    };

    const interval = window.setInterval(tickExit, 50);

    document.fonts.ready.then(() => {
      if (cancelled) return;
      sourcesRef.current.fonts = 1;
      updateTarget();
      tickExit();
    });

    const preloadLinks = Array.from(
      document.querySelectorAll<HTMLLinkElement>('link[rel="preload"][as="image"]'),
    );

    if (preloadLinks.length === 0) {
      sourcesRef.current.images = 1;
      updateTarget();
    } else {
      let loadedImages = 0;

      preloadLinks.forEach((link) => {
        const href = link.href;
        if (!href) {
          loadedImages += 1;
          sourcesRef.current.images = loadedImages / preloadLinks.length;
          updateTarget();
          return;
        }

        const image = new Image();
        image.decoding = 'async';

        const markLoaded = () => {
          if (cancelled) return;
          loadedImages += 1;
          sourcesRef.current.images = loadedImages / preloadLinks.length;
          updateTarget();
          tickExit();
        };

        image.onload = markLoaded;
        image.onerror = markLoaded;
        image.src = href;
      });
    }

    import('three').then(({ DefaultLoadingManager }) => {
      if (cancelled) return;

      DefaultLoadingManager.onStart = () => {
        threeIdleRef.current = false;
        sourcesRef.current.three = 0;
        updateTarget();
      };

      DefaultLoadingManager.onProgress = (_, loaded, total) => {
        if (cancelled || total === 0) return;
        threeIdleRef.current = false;
        sourcesRef.current.three = loaded / total;
        updateTarget();
        tickExit();
      };

      DefaultLoadingManager.onLoad = () => {
        if (cancelled) return;
        sourcesRef.current.three = 1;
        updateTarget();
        tickExit();
      };

      DefaultLoadingManager.onError = () => {
        if (cancelled) return;
        sourcesRef.current.three = 1;
        updateTarget();
        tickExit();
      };

      window.setTimeout(() => {
        if (cancelled || !threeIdleRef.current) return;
        sourcesRef.current.three = 1;
        updateTarget();
        tickExit();
      }, 300);
    });

    const onWindowLoad = () => {
      if (cancelled) return;
      sourcesRef.current.window = 1;
      updateTarget();
      tickExit();
    };

    if (document.readyState === 'complete') {
      sourcesRef.current.window = 1;
      updateTarget();
      tickExit();
    } else {
      window.addEventListener('load', onWindowLoad);
    }

    return () => {
      cancelled = true;
      window.clearInterval(interval);
      window.removeEventListener('load', onWindowLoad);
    };
  }, [isActive, updateTarget]);

  return { displayProgress, canExit };
}
