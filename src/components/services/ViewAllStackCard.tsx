'use client';

import { useRouter } from 'next/navigation';
import { useRef, useState, type MouseEvent } from 'react';

import { useLenis } from '@/hooks/useLenis';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { gsap } from '@/lib/gsap';

type ViewAllStackCardProps = {
  index: number;
  stackPad: number;
  className?: string;
};

/**
 * Fifth homepage stack card — plain “View all” into /services.
 */
export function ViewAllStackCard({
  index,
  stackPad,
  className,
}: ViewAllStackCardProps) {
  const router = useRouter();
  const lenis = useLenis();
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [leaving, setLeaving] = useState(false);

  const goToServices = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (leaving) return;

    if (prefersReducedMotion) {
      router.push('/services');
      return;
    }

    const cardEl = cardRef.current;
    if (!cardEl) {
      router.push('/services');
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
      <div class="service-card-transition__label">All services</div>
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
          router.push('/services');
        },
      })
      .to(accent, { yPercent: 0, duration: 0.45, ease: 'power3.inOut' }, 0)
      .to(mist, { yPercent: 0, duration: 0.5, ease: 'power3.inOut' }, 0.12)
      .to(
        label,
        { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power3.out' },
        0.38,
      );
  };

  return (
    <a
      ref={cardRef}
      href="/services"
      data-stack-card
      aria-label="View all services"
      aria-disabled={leaving || undefined}
      onClick={goToServices}
      className={className}
      style={{
        top: stackPad,
        zIndex: index + 1,
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        boxShadow: '0 18px 40px rgb(10 10 10 / 0.08)',
      }}
    >
      <div className="flex h-full w-full flex-1 flex-col items-center justify-center">
        <span className="font-display text-[clamp(1.75rem,4vw,2.25rem)] font-semibold tracking-[-0.03em] text-ink">
          View all
        </span>
      </div>
    </a>
  );
}
