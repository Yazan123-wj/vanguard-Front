'use client';

import { useRef, useState } from 'react';

import { HEADLINE_STAGGER } from '@/components/hero/hero.constants';
import {
  HERO_ROTATING_PHRASES,
  HeroRotatingPhrase,
} from '@/components/hero/HeroRotatingPhrase';
import { HeroTrustedBy } from '@/components/hero/HeroTrustedBy';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { gsap, SplitText, useGSAP } from '@/lib/gsap';
import { useLoader } from '@/providers/LoaderProvider';

type HeroHeadlineProps = {
  eyebrow: string;
  /** Static lead-in that ends before the rotating phrase. */
  headlinePrefix: string;
  body: string;
  phrases?: readonly string[];
};

/** Survives Strict Mode remounts so the entrance never plays twice. */
let heroEntrancePlayed = false;

export function HeroHeadline({
  eyebrow,
  headlinePrefix,
  body,
  phrases = HERO_ROTATING_PHRASES,
}: HeroHeadlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const prefixRef = useRef<HTMLSpanElement>(null);
  const phraseRef = useRef<HTMLSpanElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const trustedRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useReducedMotion();
  const { registerOnComplete } = useLoader();
  const [phraseActive, setPhraseActive] = useState(heroEntrancePlayed);

  useGSAP(
    () => {
      const eyebrowEl = eyebrowRef.current;
      const headlineEl = headlineRef.current;
      const prefixEl = prefixRef.current;
      const phraseEl = phraseRef.current;
      const bodyEl = bodyRef.current;
      const trustedEl = trustedRef.current;
      if (
        !eyebrowEl ||
        !headlineEl ||
        !prefixEl ||
        !phraseEl ||
        !bodyEl ||
        !trustedEl
      ) {
        return;
      }

      const showFinal = () => {
        gsap.set(eyebrowEl, { opacity: 1, letterSpacing: '0.14em' });
        gsap.set(headlineEl, { opacity: 1 });
        gsap.set(phraseEl, { opacity: 1, yPercent: 0 });
        gsap.set([bodyEl, trustedEl], { opacity: 1, y: 0 });
        setPhraseActive(true);
      };

      if (prefersReducedMotion || heroEntrancePlayed) {
        showFinal();
        return;
      }

      let split: SplitText | null = null;
      let cancelled = false;
      let pendingHandoff = false;
      let timeline: gsap.core.Timeline | null = null;

      // Stay fully invisible until the entrance timeline starts.
      gsap.set(eyebrowEl, { opacity: 0, letterSpacing: '0.4em' });
      gsap.set(headlineEl, { opacity: 0 });
      gsap.set(phraseEl, { opacity: 0, yPercent: 24 });
      gsap.set([bodyEl, trustedEl], { opacity: 0, y: 16 });

      const runEntrance = () => {
        if (cancelled || heroEntrancePlayed) return;
        if (!split) {
          pendingHandoff = true;
          return;
        }

        heroEntrancePlayed = true;

        // Reveal the headline shell only once lines are parked offstage.
        gsap.set(headlineEl, { opacity: 1 });
        gsap.set(split.lines, { yPercent: 110 });
        gsap.set(phraseEl, { opacity: 0, yPercent: 24 });

        timeline = gsap.timeline({
          onComplete: () => {
            if (!cancelled) setPhraseActive(true);
          },
        });

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
          phraseEl,
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.85,
            ease: 'vanguard.expo',
          },
          '-=0.7',
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

      const prepareSplit = () => {
        if (cancelled || split || heroEntrancePlayed) return;

        // Build SplitText while the headline is still opacity 0 — no flash.
        split = SplitText.create(prefixEl, {
          type: 'lines',
          mask: 'lines',
          linesClass: 'hero-line',
        });
        gsap.set(split.lines, { yPercent: 110 });

        if (pendingHandoff) runEntrance();
      };

      void document.fonts.ready.then(() => {
        if (cancelled) return;
        prepareSplit();
      });

      const unsubscribe = registerOnComplete(runEntrance);

      return () => {
        cancelled = true;
        unsubscribe();
        timeline?.kill();
        // Only revert if the entrance never played — avoids a mid-animation flash
        // when React Strict Mode remounts before handoff.
        if (!heroEntrancePlayed) {
          split?.revert();
        }
      };
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] },
  );

  return (
    <div
      ref={containerRef}
      className="relative z-10 flex w-full flex-col items-center px-gutter text-center"
    >
      <p
        ref={eyebrowRef}
        data-hero-eyebrow
        className="mb-6 whitespace-nowrap font-mono text-[11px] tracking-[0.16em] text-ink-200 opacity-0 md:mb-8 md:text-[12px]"
      >
        {eyebrow}
      </p>

      <h1
        ref={headlineRef}
        className="hero-headline font-display w-full max-w-[16ch] text-display font-semibold leading-[1.08] tracking-[-0.03em] text-paper opacity-0"
      >
        <span ref={prefixRef}>{headlinePrefix}</span>
        <span
          ref={phraseRef}
          className="mx-auto mt-[0.02em] block w-max max-w-none overflow-visible leading-none whitespace-nowrap"
        >
          <HeroRotatingPhrase phrases={phrases} active={phraseActive} />
        </span>
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
