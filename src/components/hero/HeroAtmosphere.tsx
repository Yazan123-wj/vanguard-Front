'use client';

import { useEffect, useRef, useState } from 'react';

import DelicateAsciiDots from '@/components/hero/DelicateAsciiDots';
import { HeroFluidCursor } from '@/components/hero/HeroFluidCursor';

type HeroAtmosphereProps = {
  /** Fluid needs a WebGL context — only enable on one section at a time. */
  fluid?: boolean;
  /**
   * Wait until near the viewport before mounting ascii.
   * Use on below-fold sections so first paint stays light.
   */
  deferUntilVisible?: boolean;
};

/**
 * Shared hero field: ascii grain, optional vermilion fluid cursor.
 */
export function HeroAtmosphere({
  fluid = false,
  deferUntilVisible = false,
}: HeroAtmosphereProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(!deferUntilVisible);

  useEffect(() => {
    if (!deferUntilVisible || visible) return;

    const node = hostRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { rootMargin: '200px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [deferUntilVisible, visible]);

  return (
    <div ref={hostRef} className="absolute inset-0">
      {visible ? (
        <>
          <DelicateAsciiDots />
          {fluid ? <HeroFluidCursor /> : null}
        </>
      ) : null}
    </div>
  );
}
