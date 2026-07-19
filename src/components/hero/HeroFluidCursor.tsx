'use client';

import { useEffect, useRef } from 'react';

import initFluidCursor from '@/components/hero/fluidCursor';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * Fluid-simulation cursor layer. Sits ABOVE the headline (z-20 vs z-10)
 * with pointer-events disabled, so the vermilion dye composites over the
 * white type and tints it wherever the fluid flows.
 */
export function HeroFluidCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReducedMotion) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    // Defer init so a just-disposed projects/WebGL context can release.
    const timer = window.setTimeout(() => {
      if (cancelled || !canvasRef.current) return;
      try {
        cleanup = initFluidCursor(canvasRef.current);
      } catch (error) {
        console.warn('[HeroFluidCursor] skipped —', error);
      }
    }, 50);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      cleanup?.();
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20 h-full w-full"
    />
  );
}
