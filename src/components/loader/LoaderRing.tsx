'use client';

import { useLayoutEffect, useMemo, useRef } from 'react';

import {
  RING_COUNT,
  RING_FONT_SIZE,
  RING_TRACKING,
  ringFontSizeClamp,
  ringRadiusClamp,
} from '@/components/loader/loader.constants';

type LoaderRingProps = {
  blockRefs: React.MutableRefObject<(HTMLSpanElement | null)[]>;
  className?: string;
  onBlockWidthMeasured?: (width: number) => void;
};

export function LoaderRing({
  blockRefs,
  className,
  onBlockWidthMeasured,
}: LoaderRingProps) {
  const ringRef = useRef<HTMLDivElement>(null);

  const blocks = useMemo(
    () => Array.from({ length: RING_COUNT }, (_, index) => index),
    [],
  );

  useLayoutEffect(() => {
    const firstBlock = blockRefs.current[0];
    if (!firstBlock || !onBlockWidthMeasured) return;

    onBlockWidthMeasured(firstBlock.getBoundingClientRect().width);
  }, [blockRefs, onBlockWidthMeasured]);

  return (
    <div
      ref={ringRef}
      className={`relative ${className ?? ''}`}
      style={
        {
          '--ring-radius': ringRadiusClamp,
          '--ring-font-size': ringFontSizeClamp,
          width: 'calc(var(--ring-radius) * 2)',
          height: 'calc(var(--ring-radius) * 2)',
        } as React.CSSProperties
      }
    >
      {blocks.map((index) => (
        <div
          key={index}
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 size-0"
          style={{
            transform: `rotate(${index * 30}deg)`,
            transformOrigin: '0 0',
          }}
        >
          <span
            ref={(element) => {
              blockRefs.current[index] = element;
            }}
            className="loader-ring-block font-display absolute left-0 top-0 whitespace-nowrap uppercase will-change-[opacity]"
            style={{
              fontSize: 'var(--ring-font-size)',
              letterSpacing: RING_TRACKING,
              lineHeight: 1,
              transform: 'translate(-50%, calc(-1 * var(--ring-radius)))',
              opacity: 0.11,
              color: '#ffffff',
            }}
          >
            VG
          </span>
        </div>
      ))}

      {/* Hidden measurement node at desktop font size for gap reporting */}
      <span
        aria-hidden="true"
        className="pointer-events-none invisible absolute font-display uppercase"
        style={{
          fontSize: `${RING_FONT_SIZE}px`,
          letterSpacing: RING_TRACKING,
          lineHeight: 1,
        }}
      >
        VG
      </span>
    </div>
  );
}
