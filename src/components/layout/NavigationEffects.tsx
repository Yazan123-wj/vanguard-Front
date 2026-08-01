'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { useLenis } from '@/hooks/useLenis';

function clearGallerySideEffects() {
  document.documentElement.classList.remove('gallery-lock');
  document.body.classList.remove('gallery-lock');
  document.body.style.overflow = '';
  document.body.style.cursor = '';
  document.querySelectorAll('.projects-cta-transition').forEach((node) => {
    node.remove();
  });
  document.querySelectorAll('.service-card-transition').forEach((node) => {
    node.remove();
  });
}

/**
 * Clears project-gallery side effects on route change and resets scroll.
 */
export function NavigationEffects() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!pathname.startsWith('/projects')) {
      clearGallerySideEffects();
      lenis?.start();
    }

    const resetScroll = () => {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
      window.scrollTo(0, 0);
    };

    resetScroll();
    const frame = window.requestAnimationFrame(resetScroll);
    const timeout = window.setTimeout(resetScroll, 50);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [pathname, lenis]);

  return null;
}
