'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { LoaderRing } from '@/components/loader/LoaderRing';
import {
  CYCLE_DURATION,
  EXIT_HOLD_MS,
  EXIT_SPIN_DURATION,
  EXIT_SPIN_TURNS,
  RING_COUNT,
  RING_RADIUS,
  SESSION_FADE_MS,
  VERMILION,
} from '@/components/loader/loader.constants';
import { useLoadProgress } from '@/components/loader/useLoadProgress';
import { useLenis } from '@/hooks/useLenis';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { gsap, useGSAP } from '@/lib/gsap';
import { useSiteAudio } from '@/providers/AudioProvider';
import { useLoader } from '@/providers/LoaderProvider';

const STAGGER = CYCLE_DURATION / RING_COUNT;

function msUntilBlock11Leading(elapsedSec: number) {
  const phase =
    (((elapsedSec - 11 * STAGGER) % CYCLE_DURATION) + CYCLE_DURATION) %
    CYCLE_DURATION;
  return phase === 0 ? 0 : (CYCLE_DURATION - phase) * 1000;
}

export function Loader() {
  const { isLoading, skipFullLoader, complete, dispatchHandoff, setProgress } =
    useLoader();
  const { unlock: unlockAudio } = useSiteAudio();
  const prefersReducedMotion = useReducedMotion();
  const lenis = useLenis();

  const containerRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const ringContainerRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const chaseTimelinesRef = useRef<gsap.core.Timeline[]>([]);
  const chaseStartRef = useRef(0);
  const exitStartedRef = useRef(false);
  const blockWidthRef = useRef<number | null>(null);

  const [visible, setVisible] = useState(true);

  const trackProgress = isLoading && !skipFullLoader;
  const { displayProgress, canExit } = useLoadProgress(trackProgress);

  useEffect(() => {
    if (trackProgress) {
      setProgress(displayProgress);
    }
  }, [displayProgress, setProgress, trackProgress]);

  // Keep scroll lock in sync with BOTH isLoading and the Lenis instance.
  // Critical: if Lenis mounts after the loader already called stop(), or
  // finishLoader ran while lenis was still null, wheel events stay
  // preventDefault'd forever (trackpad dead, scrollbar still works).
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      lenis?.stop();
      return;
    }

    document.body.style.overflow = '';
    lenis?.start();
  }, [isLoading, lenis]);

  const finishLoader = useCallback(() => {
    blockRefs.current.forEach((block) => {
      if (block) gsap.set(block, { willChange: 'auto' });
    });

    if (layerRef.current) {
      gsap.set(layerRef.current, { willChange: 'auto' });
    }

    setVisible(false);
    document.body.style.overflow = '';
    lenis?.start();
    unlockAudio();
    complete();

    const main = document.querySelector('main');
    if (main instanceof HTMLElement) {
      main.focus({ preventScroll: true });
    }
  }, [complete, lenis, unlockAudio]);

  const runSessionFade = useCallback(() => {
    if (exitStartedRef.current || !layerRef.current) return;
    exitStartedRef.current = true;
    unlockAudio();

    gsap.set(layerRef.current, { pointerEvents: 'none' });

    gsap.to(layerRef.current, {
      opacity: 0,
      duration: SESSION_FADE_MS / 1000,
      ease: 'vanguard.out',
      onComplete: finishLoader,
    });
  }, [finishLoader, unlockAudio]);

  const runReducedMotionExit = useCallback(() => {
    if (exitStartedRef.current || !layerRef.current || !ringContainerRef.current) {
      return;
    }

    exitStartedRef.current = true;
    unlockAudio();
    gsap.set(layerRef.current, { pointerEvents: 'none' });
    gsap.set(ringContainerRef.current, { opacity: 0.4 });

    const timeline = gsap.timeline({ onComplete: finishLoader });
    timeline.to({}, { duration: 0.4 });
    timeline.to(ringContainerRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: 'vanguard.out',
    });
    timeline.to(
      layerRef.current,
      { opacity: 0, duration: 0.2, ease: 'vanguard.out' },
      '<',
    );
  }, [finishLoader, unlockAudio]);

  const runFullExit = useCallback(() => {
    if (exitStartedRef.current || !layerRef.current || !ringContainerRef.current) {
      return;
    }

    exitStartedRef.current = true;
    unlockAudio();

    chaseTimelinesRef.current.forEach((timeline) => timeline.kill());
    chaseTimelinesRef.current = [];

    const layer = layerRef.current;
    const ringContainer = ringContainerRef.current;
    const blocks = blockRefs.current.filter(
      (block): block is HTMLSpanElement => block !== null,
    );

    // Freeze chase colors — full white ring for the spin beat.
    gsap.set(blocks, { opacity: 1, color: '#ffffff', clearProps: 'willChange' });
    gsap.set(layer, { pointerEvents: 'none', willChange: 'transform' });
    gsap.set(ringContainer, { willChange: 'transform' });

    const timeline = gsap.timeline({ onComplete: finishLoader });

    timeline.to({}, { duration: EXIT_HOLD_MS / 1000 });

    // Smooth accelerate → coast spin, then curtain lifts underneath.
    timeline.to(ringContainer, {
      rotation: EXIT_SPIN_TURNS * 360,
      duration: EXIT_SPIN_DURATION,
      ease: 'power2.inOut',
      transformOrigin: '50% 50%',
    });

    timeline.addLabel('curtain', `-=${EXIT_SPIN_DURATION * 0.18}`);
    timeline.to(
      ringContainer,
      { opacity: 0, duration: 0.45, ease: 'power2.inOut' },
      'curtain',
    );
    timeline.to(
      layer,
      { yPercent: -100, duration: 1.15, ease: 'vanguard.expo' },
      'curtain+=0.12',
    );
    timeline.to(
      ringContainer,
      { yPercent: -28, duration: 1.15, ease: 'vanguard.expo' },
      '<',
    );
    // Fire the hero handoff ~300ms before the curtain finishes so the
    // entrance overlaps the exit instead of running sequentially.
    timeline.call(dispatchHandoff, [], 'curtain+=0.9');
  }, [dispatchHandoff, finishLoader, unlockAudio]);

  useGSAP(
    () => {
      if (skipFullLoader) return;

      if (prefersReducedMotion && ringContainerRef.current) {
        gsap.set(ringContainerRef.current, { opacity: 0.4 });
        return;
      }

      if (prefersReducedMotion) return;

      const blocks = blockRefs.current.filter(
        (block): block is HTMLSpanElement => block !== null,
      );

      if (blocks.length === 0) return;

      chaseStartRef.current = performance.now() / 1000;
      const timelines: gsap.core.Timeline[] = [];

      blocks.forEach((block, index) => {
        gsap.set(block, { willChange: 'opacity' });

        const timeline = gsap.timeline({
          repeat: -1,
          defaults: { ease: 'none' },
          delay: index * STAGGER,
        });

        timeline.to(block, {
          keyframes: [
            { opacity: 1, color: VERMILION, duration: CYCLE_DURATION * 0.02 },
            { opacity: 1, color: '#ffffff', duration: CYCLE_DURATION * 0.05 },
            { opacity: 0.34, color: '#ffffff', duration: CYCLE_DURATION * 0.35 },
            { opacity: 0.11, color: '#ffffff', duration: CYCLE_DURATION * 0.58 },
          ],
          duration: CYCLE_DURATION,
        });

        timelines.push(timeline);
      });

      chaseTimelinesRef.current = timelines;

      return () => {
        timelines.forEach((timeline) => timeline.kill());
        chaseTimelinesRef.current = [];
      };
    },
    { scope: containerRef, dependencies: [skipFullLoader, prefersReducedMotion] },
  );

  useEffect(() => {
    if (!isLoading || exitStartedRef.current) return;

    if (skipFullLoader) {
      runSessionFade();
      return;
    }

    if (!canExit) return;

    if (prefersReducedMotion) {
      runReducedMotionExit();
      return;
    }

    const elapsed = performance.now() / 1000 - chaseStartRef.current;
    const waitMs = msUntilBlock11Leading(elapsed);

    const timer = window.setTimeout(runFullExit, waitMs);
    return () => window.clearTimeout(timer);
  }, [
    canExit,
    isLoading,
    prefersReducedMotion,
    runFullExit,
    runReducedMotionExit,
    runSessionFade,
    skipFullLoader,
  ]);

  const handleBlockWidthMeasured = useCallback((width: number) => {
    blockWidthRef.current = width;
  }, []);

  if (!isLoading && !visible) return null;
  if (!isLoading) return null;

  const progressLabel = skipFullLoader
    ? 100
    : Math.min(100, Math.max(0, displayProgress));

  return (
    <div
      ref={containerRef}
      role="progressbar"
      aria-label="Loading Vanguard"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progressLabel}
      className="fixed inset-0 z-loader"
      // First interaction during load unlocks ambient audio (default ON).
      onPointerDown={unlockAudio}
      onClick={unlockAudio}
    >
      <div
        ref={layerRef}
        className="flex h-dvh min-h-dvh w-full flex-col items-center justify-center bg-[#0A0A0A]"
        style={{ transform: 'translateY(0%)' }}
      >
        {!skipFullLoader && (
          <>
            <div ref={ringContainerRef} className="relative">
              <LoaderRing
                blockRefs={blockRefs}
                onBlockWidthMeasured={handleBlockWidthMeasured}
              />
            </div>

            <p
              className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[12px] tracking-[0.14em] text-ink-400"
              aria-hidden={prefersReducedMotion}
            >
              VANGUARD ·{' '}
              <span className="text-vermilion">
                {String(progressLabel).padStart(2, '0')}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

// Expose gap math for deliverable reporting
export function getLoaderGapReport(blockWidth: number) {
  const arcSpacing = (2 * Math.PI * RING_RADIUS) / RING_COUNT;
  const gap = arcSpacing - blockWidth;
  const recommendedRadius =
    gap > 12 ? Math.round((RING_COUNT * blockWidth) / (2 * Math.PI)) : RING_RADIUS;

  return { blockWidth, arcSpacing, gap, recommendedRadius };
}
