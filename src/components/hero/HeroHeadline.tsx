'use client';

import { useRef } from 'react';

import { HEADLINE_STAGGER } from '@/components/hero/hero.constants';
import { HeroTrustedBy } from '@/components/hero/HeroTrustedBy';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { gsap, SplitText, useGSAP } from '@/lib/gsap';
import { useLoader } from '@/providers/LoaderProvider';

type HeroHeadlineProps = {
  eyebrow: string;
  headline: string;
  body: string;
};

export function HeroHeadline({ eyebrow, headline, body }: HeroHeadlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const trustedRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useReducedMotion();
  const { registerOnComplete, isLoading } = useLoader();

  useGSAP(
    () => {
      const eyebrowEl = eyebrowRef.current;
      const headlineEl = headlineRef.current;
      const bodyEl = bodyRef.current;
      const trustedEl = trustedRef.current;
      if (!eyebrowEl || !headlineEl || !bodyEl || !trustedEl) return;

      if (prefersReducedMotion) {
        gsap.set([eyebrowEl, headlineEl, bodyEl, trustedEl], { opacity: 1 });
        return;
      }

      let split: SplitText | null = null;
      let entranceDone = false;
      let entranceRequested = false;
      let cancelled = false;
      let timeline: gsap.core.Timeline | null = null;

      gsap.set(eyebrowEl, { opacity: 0, letterSpacing: '0.4em' });
      gsap.set([bodyEl, trustedEl], { opacity: 0, y: 16 });

      const runEntrance = () => {
        if (cancelled || entranceDone || !split) {
          entranceRequested = true;
          return;
        }
        entranceDone = true;

        timeline = gsap.timeline();
        timeline.to(eyebrowEl, {
          opacity: 1,
          letterSpacing: '0.14em',
          duration: 0.5,
          ease: 'vanguard.out',
        });
        timeline.to(
          split.lines,
          {
            yPercent: 0,
            duration: 1.1,
            stagger: HEADLINE_STAGGER,
            ease: 'vanguard.expo',
          },
          '-=0.2',
        );
        timeline.to(
          bodyEl,
          { opacity: 1, y: 0, duration: 0.7, ease: 'vanguard.out' },
          '-=0.45',
        );
        timeline.to(
          trustedEl,
          { opacity: 1, y: 0, duration: 0.7, ease: 'vanguard.out' },
          '-=0.45',
        );
      };

      const doSplit = () => {
        split?.revert();
        split = SplitText.create(headlineEl, {
          type: 'lines',
          mask: 'lines',
          linesClass: 'hero-line',
        });
        gsap.set(headlineEl, { opacity: 1 });
        gsap.set(split.lines, { yPercent: entranceDone ? 0 : 110 });
      };

      document.fonts.ready.then(() => {
        if (cancelled) return;
        doSplit();
        if (entranceRequested) runEntrance();
      });

      const unsubscribe = isLoading ? registerOnComplete(runEntrance) : null;
      if (!isLoading) {
        entranceRequested = true;
      }

      let resizeTimer = 0;
      const onResize = () => {
        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(() => {
          if (cancelled || !split) return;
          doSplit();
        }, 200);
      };
      window.addEventListener('resize', onResize);

      return () => {
        cancelled = true;
        window.clearTimeout(resizeTimer);
        window.removeEventListener('resize', onResize);
        unsubscribe?.();
        timeline?.kill();
        split?.revert();
      };
    },
    { scope: containerRef, dependencies: [prefersReducedMotion, isLoading] },
  );

  return (
    <div
      ref={containerRef}
      className="relative z-10 flex w-full flex-col items-center px-gutter text-center"
    >
      <p
        ref={eyebrowRef}
        className="mb-6 whitespace-nowrap font-mono text-[11px] tracking-[0.16em] text-ink-200 opacity-0 md:mb-8 md:text-[12px]"
      >
        {eyebrow}
      </p>

      <h1
        ref={headlineRef}
        className="hero-headline font-display w-full max-w-[14ch] text-display font-semibold leading-[1.05] tracking-[-0.03em] text-paper opacity-0"
      >
        {headline}
      </h1>

      <p
        ref={bodyRef}
        className="mt-8 max-w-[34ch] text-body-lg text-ink-200 opacity-0 md:mt-10"
      >
        {body}
      </p>

      <div ref={trustedRef} className="w-full opacity-0">
        <HeroTrustedBy />
      </div>
    </div>
  );
}
