'use client';

import { useRef } from 'react';

import {
  getHomeStackCards,
  type StackCardData,
} from '@/components/sections/stackCards.data';
import { ServiceCardLink } from '@/components/services/ServiceCardLink';
import { ViewAllStackCard } from '@/components/services/ViewAllStackCard';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { gsap, useGSAP } from '@/lib/gsap';

const FALLBACK_HOME_CARDS = getHomeStackCards();

/** Vertical peek (px) each depth level sits above the card in front. */
const STACK_PEEK = 18;
/** How much narrower each depth level gets. */
const STACK_SCALE_STEP = 0.055;
/** Gray faces for cards tucked behind the front. */
const STACK_FACE = ['#ffffff', '#e6e6e6', '#dbdbdb', '#d0d0d0'] as const;

/**
 * Cards rise from below over sticky Partner copy, then tuck into a
 * stair-step deck (front white, rear gray peeks) like the reference.
 *
 * Desktop (≥768px): original scrubbed pin stack — unchanged.
 * Mobile: plain vertical list via gsap.matchMedia (same DOM, no dual render).
 */
type StackCardsProps = {
  /** Services from the backend — falls back to bundled content. */
  cards?: StackCardData[];
};

export function StackCards({ cards: cardsProp }: StackCardsProps) {
  const homeCards =
    cardsProp && cardsProp.length > 0 ? cardsProp : FALLBACK_HOME_CARDS;
  const stackTotal = homeCards.length + 1; // + the View all card
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
          top: 'auto',
        });
        gsap.set(stage, {
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        });
        gsap.set(deck, {
          height: 'auto',
          paddingTop: 0,
          maxWidth: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
        });
        return;
      }

      const mm = gsap.matchMedia();

      mm.add('(max-width: 767px)', () => {
        gsap.set(cards, {
          clearProps: 'transform',
          position: 'relative',
          inset: 'auto',
          top: 'auto',
          rotateX: 0,
          scale: 1,
          y: 0,
        });
        gsap.set(stage, {
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          paddingTop: '2rem',
          paddingBottom: '3rem',
        });
        gsap.set(deck, {
          height: 'auto',
          paddingTop: 0,
          maxWidth: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
        });

        return () => {
          gsap.set(cards, { clearProps: 'position,inset,top,transform' });
          gsap.set(stage, { clearProps: 'height,display,flexDirection,gap,paddingTop,paddingBottom' });
          gsap.set(deck, { clearProps: 'height,paddingTop,maxWidth,display,flexDirection,gap' });
        };
      });

      mm.add('(min-width: 768px)', () => {
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
        const partnerSection =
          document.querySelector<HTMLElement>('[data-partner]');

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
        if (partnerSection) {
          gsap.set(partnerSection, { autoAlpha: 1 });
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
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

          tl.to({}, { duration: holdDur }, at + enterDur);
        });

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

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
          gsap.set(cards, { clearProps: 'transform' });
          gsap.set(deck, { clearProps: 'transform' });
          if (partnerMotion) gsap.set(partnerMotion, { clearProps: 'transform' });
          if (partnerSection) gsap.set(partnerSection, { autoAlpha: 1 });
        };
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [prefersReducedMotion, homeCards.length] },
  );

  const stackPad = (stackTotal - 1) * STACK_PEEK;
  const cardClassName =
    'absolute inset-x-0 bottom-0 flex cursor-pointer flex-col overflow-hidden rounded-[1.5rem] bg-paper p-4 transition-[box-shadow] duration-300 hover:shadow-[0_22px_48px_rgb(10_10_10/0.12)] md:p-5';

  return (
    <section ref={sectionRef} data-stack-cards className="relative z-10">
      <div
        ref={stageRef}
        data-stack-stage
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
          {homeCards.map((card, index) => (
            <ServiceCardLink
              key={card.id}
              card={card}
              index={index}
              stackPad={stackPad}
              className={cardClassName}
            />
          ))}
          <ViewAllStackCard
            index={homeCards.length}
            stackPad={stackPad}
            className={cardClassName}
          />
        </div>
      </div>
    </section>
  );
}
