'use client';

import { useRouter } from 'next/navigation';
import { useRef, useState, type CSSProperties, type MouseEvent } from 'react';

import { StackCardArt } from '@/components/sections/StackCardArt';
import type { StackCardData } from '@/components/sections/stackCards.data';
import { useLenis } from '@/hooks/useLenis';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { gsap } from '@/lib/gsap';

type ServiceCardLinkProps = {
  card: StackCardData;
  index: number;
  stackPad: number;
  className?: string;
  style?: CSSProperties;
};

/**
 * Service stack card with a vermilion → mist curtain into /services/[slug].
 */
export function ServiceCardLink({
  card,
  index,
  stackPad,
  className,
  style,
}: ServiceCardLinkProps) {
  const router = useRouter();
  const lenis = useLenis();
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [leaving, setLeaving] = useState(false);

  const goToService = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (leaving) return;

    const href = `/services/${card.slug}`;
    if (prefersReducedMotion) {
      router.push(href);
      return;
    }

    const cardEl = cardRef.current;
    if (!cardEl) {
      router.push(href);
      return;
    }

    setLeaving(true);
    lenis?.stop();

    const overlay = document.createElement('div');
    overlay.setAttribute('aria-hidden', 'true');
    overlay.className = 'service-card-transition';
    overlay.innerHTML = `
      <div class="service-card-transition__accent"></div>
      <div class="service-card-transition__mist"></div>
      <div class="service-card-transition__label">${card.title}</div>
    `;
    document.body.appendChild(overlay);

    const mist = overlay.querySelector<HTMLElement>(
      '.service-card-transition__mist',
    );
    const accent = overlay.querySelector<HTMLElement>(
      '.service-card-transition__accent',
    );
    const label = overlay.querySelector<HTMLElement>(
      '.service-card-transition__label',
    );

    gsap.set(overlay, { pointerEvents: 'all' });
    gsap.set(accent, { yPercent: 110 });
    gsap.set(mist, { yPercent: 110 });
    gsap.set(label, { autoAlpha: 0, y: 20 });

    gsap
      .timeline({
        onComplete: () => {
          router.push(href);
          window.setTimeout(() => overlay.remove(), 280);
        },
      })
      .to(cardEl, {
        scale: 1.06,
        y: -24,
        boxShadow: '0 28px 60px rgb(10 10 10 / 0.18)',
        duration: 0.42,
        ease: 'power3.out',
      })
      .to(
        accent,
        { yPercent: 0, duration: 0.48, ease: 'power3.inOut' },
        0.1,
      )
      .to(mist, { yPercent: 0, duration: 0.58, ease: 'power3.inOut' }, 0.22)
      .to(
        label,
        { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power3.out' },
        0.38,
      );
  };

  return (
    <a
      ref={cardRef}
      href={`/services/${card.slug}`}
      data-stack-card
      aria-label={`View ${card.title} service`}
      aria-disabled={leaving || undefined}
      onClick={goToService}
      className={className}
      style={{
        top: stackPad,
        zIndex: index + 1,
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        boxShadow: '0 18px 40px rgb(10 10 10 / 0.08)',
        ...style,
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
    </a>
  );
}
