'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type MotionContextValue = {
  prefersReducedMotion: boolean;
};

const MotionContext = createContext<MotionContextValue>({
  prefersReducedMotion: false,
});

export function useReducedMotion() {
  return useContext(MotionContext).prefersReducedMotion;
}

export { MotionContext };

export function useMotionMediaQuery() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const update = () => setPrefersReducedMotion(mediaQuery.matches);
    update();

    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  return prefersReducedMotion;
}
