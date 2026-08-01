'use client';

import { useRef } from 'react';
import type { ReactNode } from 'react';

import { useReducedMotion } from '@/hooks/useReducedMotion';
import { gsap, useGSAP } from '@/lib/gsap';

type ServicePageEnterProps = {
  children: ReactNode;
};

/** Soft fade/rise when a service page mounts after the mist curtain. */
export function ServicePageEnter({ children }: ServicePageEnterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion) return;

      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 28 },
        { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.05 },
      );
    },
    { scope: ref, dependencies: [prefersReducedMotion] },
  );

  return (
    <div ref={ref} className="min-h-dvh">
      {children}
    </div>
  );
}
