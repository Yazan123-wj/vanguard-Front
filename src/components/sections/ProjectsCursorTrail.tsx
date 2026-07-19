'use client';

import { useEffect, useRef } from 'react';

import { projects } from '@/components/projects/legacy/data';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { gsap } from '@/lib/gsap';

const TRAIL_COUNT = 10;
const SPAWN_DISTANCE = 56;
const IMAGE_URLS = projects.slice(0, TRAIL_COUNT).map((project) => project.image);

type ProjectsCursorTrailProps = {
  active: boolean;
};

/**
 * Project thumbnails that bloom around the cursor while the CTA section is hovered.
 */
export function ProjectsCursorTrail({ active }: ProjectsCursorTrailProps) {
  const layerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer || prefersReducedMotion || !active) return;

    const cards = Array.from(
      layer.querySelectorAll<HTMLElement>('[data-trail-card]'),
    );
    if (cards.length === 0) return;

    gsap.set(cards, {
      xPercent: -50,
      yPercent: -50,
      scale: 0,
      opacity: 0,
      rotate: 0,
    });

    let index = 0;
    let lastX = 0;
    let lastY = 0;
    let hasPoint = false;

    const placeCard = (clientX: number, clientY: number) => {
      const rect = layer.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const card = cards[index % cards.length];
      if (!card) return;

      index += 1;

      const offsetX = (Math.random() - 0.5) * 70;
      const offsetY = (Math.random() - 0.5) * 70;
      const rotate = (Math.random() - 0.5) * 28;

      gsap.killTweensOf(card);
      gsap.set(card, {
        x: x + offsetX,
        y: y + offsetY,
        rotate,
        scale: 0.55,
        opacity: 0,
        zIndex: index,
      });
      gsap
        .timeline()
        .to(card, {
          scale: 1,
          opacity: 1,
          duration: 0.35,
          ease: 'power3.out',
        })
        .to(
          card,
          {
            x: x + offsetX + (Math.random() - 0.5) * 24,
            y: y + offsetY - 18,
            duration: 0.7,
            ease: 'power2.out',
          },
          0,
        )
        .to(
          card,
          {
            opacity: 0,
            scale: 0.7,
            duration: 0.45,
            ease: 'power2.in',
          },
          0.55,
        );
    };

    const onMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      if (!hasPoint) {
        hasPoint = true;
        lastX = clientX;
        lastY = clientY;
        placeCard(clientX, clientY);
        return;
      }

      const dx = clientX - lastX;
      const dy = clientY - lastY;
      if (dx * dx + dy * dy < SPAWN_DISTANCE * SPAWN_DISTANCE) return;

      lastX = clientX;
      lastY = clientY;
      placeCard(clientX, clientY);
    };

    const onLeave = () => {
      hasPoint = false;
      gsap.to(cards, {
        opacity: 0,
        scale: 0.6,
        duration: 0.3,
        ease: 'power2.in',
        stagger: 0.02,
        overwrite: true,
      });
    };

    const section = layer.parentElement;
    section?.addEventListener('pointermove', onMove);
    section?.addEventListener('pointerleave', onLeave);

    return () => {
      section?.removeEventListener('pointermove', onMove);
      section?.removeEventListener('pointerleave', onLeave);
      gsap.killTweensOf(cards);
    };
  }, [active, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div
      ref={layerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
    >
      {IMAGE_URLS.map((src, i) => (
        <div
          key={`${src}-${i}`}
          data-trail-card
          className="absolute top-0 left-0 h-[5.75rem] w-[5.75rem] overflow-hidden rounded-md bg-paper shadow-[0_10px_28px_rgba(10,10,10,0.16)] md:h-[6.75rem] md:w-[6.75rem]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" className="h-full w-full object-cover" draggable={false} />
        </div>
      ))}
    </div>
  );
}
