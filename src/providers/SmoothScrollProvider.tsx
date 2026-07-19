'use client';

import 'lenis/dist/lenis.css';

import Lenis from 'lenis';
import { useEffect, useState, type ReactNode } from 'react';

import { LenisContext } from '@/hooks/useLenis';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { gsap, ScrollTrigger } from '@/lib/gsap';

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const prefersReducedMotion = useReducedMotion();
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const instance = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1,
    });

    // Always land at the top — browser scroll restoration fights Lenis otherwise.
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    instance.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);

    instance.on('scroll', ScrollTrigger.update);

    // Drive Lenis from the GSAP ticker so ScrollTrigger and smooth scroll
    // share one clock. time from gsap is seconds → Lenis wants ms.
    const tickerCallback = (time: number) => {
      instance.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    const frame = requestAnimationFrame(() => {
      setLenis(instance);
    });

    return () => {
      cancelAnimationFrame(frame);
      gsap.ticker.remove(tickerCallback);
      instance.destroy();
      setLenis(null);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
