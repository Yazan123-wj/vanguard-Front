'use client';

import { useEffect, useRef } from 'react';

import { useReducedMotion } from '@/hooks/useReducedMotion';
import { gsap } from '@/lib/gsap';

export const HERO_ROTATING_PHRASES = [
  'blend in.',
  'play safe.',
  'follow.',
  'settle.',
] as const;

type HeroRotatingPhraseProps = {
  phrases?: readonly string[];
  /** Start cycling only after the hero entrance has finished. */
  active?: boolean;
  className?: string;
};

const CLIP_OPEN = 'inset(0% 0% 0% 0%)';
const CLIP_CLOSED = 'inset(100% 0% 0% 0%)';

/**
 * End-phrase cycle with a vertical curtain wipe.
 * Inactive phrases are clipped in CSS from the first paint so they never flash.
 */
export function HeroRotatingPhrase({
  phrases = HERO_ROTATING_PHRASES,
  active = false,
  className = '',
}: HeroRotatingPhraseProps) {
  const maskRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();
  const indexRef = useRef(0);

  useEffect(() => {
    const masks = maskRefs.current.filter(Boolean) as HTMLSpanElement[];
    if (masks.length < 2) return;

    // Sync GSAP to the CSS initial state (only index 0 open).
    masks.forEach((mask, i) => {
      gsap.set(mask, {
        clipPath: i === 0 ? CLIP_OPEN : CLIP_CLOSED,
      });
    });

    if (!active || prefersReducedMotion) return;

    let cancelled = false;
    let timeoutId = 0;
    let tween: gsap.core.Timeline | null = null;
    const HOLD_MS = 2800;

    const advance = () => {
      if (cancelled) return;
      const from = indexRef.current;
      const to = (from + 1) % masks.length;
      const outgoing = masks[from];
      const incoming = masks[to];
      if (!outgoing || !incoming) return;

      tween?.kill();
      gsap.set(incoming, { clipPath: CLIP_CLOSED });

      tween = gsap.timeline({
        onComplete: () => {
          indexRef.current = to;
          gsap.set(outgoing, { clipPath: CLIP_CLOSED });
          if (!cancelled) {
            timeoutId = window.setTimeout(advance, HOLD_MS);
          }
        },
      });

      tween.to(outgoing, {
        clipPath: CLIP_CLOSED,
        duration: 0.55,
        ease: 'power3.inOut',
      });

      tween.fromTo(
        incoming,
        { clipPath: CLIP_CLOSED },
        {
          clipPath: CLIP_OPEN,
          duration: 0.7,
          ease: 'power3.inOut',
        },
        '-=0.12',
      );
    };

    timeoutId = window.setTimeout(advance, HOLD_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      tween?.kill();
    };
  }, [active, phrases, prefersReducedMotion]);

  const label = phrases.join(', ');
  const longestCh = Math.max(...phrases.map((phrase) => phrase.length));

  return (
    <span
      className={`hero-rotating-phrase relative inline-grid align-baseline ${className}`}
      style={{ minWidth: `${longestCh + 0.35}ch` }}
      aria-live="polite"
      aria-label={label}
    >
      {phrases.map((phrase, index) => (
        <span
          key={phrase}
          ref={(el) => {
            maskRefs.current[index] = el;
          }}
          className="hero-rotating-phrase__mask col-start-1 row-start-1 inline-block will-change-[clip-path]"
          // Clip in HTML/CSS immediately — don’t wait for useEffect.
          style={{
            clipPath: index === 0 ? CLIP_OPEN : CLIP_CLOSED,
          }}
          aria-hidden={index !== 0}
        >
          <span className="hero-rotating-phrase__word inline-block whitespace-nowrap px-[0.06em] pt-[0.12em] pb-[0.22em] leading-none text-vermilion">
            {phrase}
          </span>
        </span>
      ))}
    </span>
  );
}
