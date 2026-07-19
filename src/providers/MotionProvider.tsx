'use client';

import { useMemo, type ReactNode } from 'react';

import { MotionContext, useMotionMediaQuery } from '@/hooks/useReducedMotion';

type MotionProviderProps = {
  children: ReactNode;
};

export function MotionProvider({ children }: MotionProviderProps) {
  const prefersReducedMotion = useMotionMediaQuery();

  const value = useMemo(
    () => ({ prefersReducedMotion }),
    [prefersReducedMotion],
  );

  return (
    <MotionContext.Provider value={value}>{children}</MotionContext.Provider>
  );
}
