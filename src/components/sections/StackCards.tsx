'use client';

import { useRef } from 'react';

import { StackCardArt } from '@/components/sections/StackCardArt';
import { STACK_CARDS } from '@/components/sections/stackCards.data';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { gsap, useGSAP } from '@/lib/gsap';

/** Vertical peek (px) each depth level sits above the card in front. */
const STACK_PEEK = 18;
/** How much narrower each depth level gets. */
const STACK_SCALE_STEP = 0.055;
/** Gray faces for cards tucked behind the front. */
const STACK_FACE = ['#ffffff', '#e6e6e6', '#dbdbdb', '#d0d0d0'] as const;

/**
 * Cards rise from below over sticky Partner copy, then tuck into a
 * stair-step deck (front white, rear gray peeks) like the reference.
 */
export function StackCards() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(
    () => {
      const section = sectionRef.current;
      const stage = stageRef.current;
      const deck = deckRef.current;
      if (!section || !stage || !deck) return;

      const cards = gsap.utils.toArray<HTMLElement>(
        deck.querySelectorAll('[data-stack-card]'),
      );
      if (cards.length === 0) return;

      if (prefersReducedMotion) {
        gsap.set(cards, {
          clearProps: 'transform',
          position: 'relative',
          inset: 'auto',
        });
        gsap.set(stage, {
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        });
        return;
      }

      gsap.set(stage, {
        perspective: 1100,
        perspectiveOrigin: '50% 90%',
      });
      gsap.set(deck, { transformStyle: 'preserve-3d' });

      const parkY = () => window.innerHeight * 1.05;
      const fromRotate = 48;
      const fromScaleX = 2.75;
      const fromScaleY = 1.85;
      const enterDur = 1;
      const holdDur = 0.45;
      const exitDur = 1;
      const step = enterDur + holdDur;

      const partnerMotion = document.querySelector<HTMLElement>(
        '[data-partner-motion]',
      );
      const partnerSection = document.querySelector<HTMLElement>('[data-partner]');

      gsap.set(cards, {
        transformPerspective: 1100,
        transformOrigin: '50% 0%',
        force3D: true,
        y: parkY,
        rotateX: fromRotate,
        scaleX: fromScaleX,
        scaleY: fromScaleY,
        autoAlpha: 1,
        backgroundColor: STACK_FACE[0],
      });

      gsap.set(deck, { y: 0, force3D: true });
      if (partnerMotion) {
        gsap.set(partnerMotion, { y: 0, force3D: true });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          // Stack sequence + final hold + shared exit upward.
          end: () =>
            `+=${(cards.length * step + exitDur) * window.innerHeight * 1.15}`,
          pin: true,
          scrub: 1.1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, i) => {
        const at = i * step;

        // New card rises wide → settles as the front of the deck.
        tl.fromTo(
          card,
          {
            y: parkY,
            rotateX: fromRotate,
            scaleX: fromScaleX,
            scaleY: fromScaleY,
            backgroundColor: STACK_FACE[0],
          },
          {
            y: 0,
            rotateX: 0,
            scaleX: 1,
            scaleY: 1,
            scale: 1,
            backgroundColor: STACK_FACE[0],
            duration: enterDur,
            ease: 'none',
            force3D: true,
          },
          at,
        );

        // Tuck every earlier card one step deeper into the stair stack.
        for (let j = 0; j < i; j++) {
          const earlier = cards[j];
          if (!earlier) continue;
          const depth = i - j;
          tl.to(
            earlier,
            {
              y: -STACK_PEEK * depth,
              scale: 1 - STACK_SCALE_STEP * depth,
              backgroundColor:
                STACK_FACE[Math.min(depth, STACK_FACE.length - 1)],
              duration: enterDur,
              ease: 'none',
              force3D: true,
            },
            at,
          );
        }

        // Hold on every settled card — including the last — before exit.
        tl.to({}, { duration: holdDur }, at + enterDur);
      });

      // After the final stack hold: cards + Partner copy leave together.
      const exitAt = cards.length * step;
      const exitY = () => -window.innerHeight * 1.2;

      tl.to(
        deck,
        {
          y: exitY,
          duration: exitDur,
          ease: 'none',
          force3D: true,
        },
        exitAt,
      );

      if (partnerMotion) {
        tl.to(
          partnerMotion,
          {
            y: exitY,
            duration: exitDur,
            ease: 'none',
            force3D: true,
          },
          exitAt,
        );
      }

      // Fade the sticky mist panel itself so it doesn’t leave a white wall
      // after the copy exits and before the projects curtain.
      if (partnerSection) {
        tl.to(
          partnerSection,
          {
            autoAlpha: 0,
            duration: exitDur * 0.85,
            ease: 'none',
          },
          exitAt,
        );
      }
    },
    { scope: sectionRef, dependencies: [prefersReducedMotion] },
  );

  const stackPad = (STACK_CARDS.length - 1) * STACK_PEEK;

  return (
    <section ref={sectionRef} data-stack-cards className="relative z-10">
      <div
        ref={stageRef}
        className="relative flex h-dvh items-center justify-center overflow-x-hidden overflow-y-visible px-gutter"
      >
        <div
          ref={deckRef}
          data-stack-deck
          className="relative w-full max-w-[min(86vw,340px)] will-change-transform"
          style={{
            height: `min(58dvh, 460px)`,
            paddingTop: stackPad + 8,
          }}
        >
          {STACK_CARDS.map((card, index) => (
            <article
              key={card.id}
              data-stack-card
              className="absolute inset-x-0 bottom-0 flex flex-col overflow-hidden rounded-[1.5rem] bg-paper p-4 md:p-5"
              style={{
                top: stackPad,
                zIndex: index + 1,
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                boxShadow: '0 18px 40px rgb(10 10 10 / 0.08)',
              }}
            >
              <StackCardArt />

              <div className="flex flex-1 flex-col pt-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-[12px] tracking-[0.22em] text-ink-600">
                    {card.id.split('').join(' ')}
                  </span>
                  <span aria-hidden="true" className="text-ink-600">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </span>
                </div>

                <h3 className="font-display text-[1.35rem] font-semibold tracking-[-0.025em] text-ink md:text-[1.5rem]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-ink-600">
                  {card.body}
                </p>

                <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
                  {card.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-ink/20 px-2.5 py-1 font-mono text-[9px] tracking-[0.14em] text-ink-600 uppercase"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
