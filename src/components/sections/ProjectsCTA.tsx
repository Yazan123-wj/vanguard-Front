'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState, type MouseEvent } from 'react';

import { ProjectsCursorTrail } from '@/components/sections/ProjectsCursorTrail';
import { useLenis } from '@/hooks/useLenis';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { PROJECTS_TRANSITION_KEY } from '@/lib/constants';
import { gsap } from '@/lib/gsap';

type ProjectsCTAProps = {
  /** Project thumbnails for the cursor trail (from the backend). */
  trailImages?: string[];
};

/**
 * Post-stack invitation into the projects gallery.
 */
export function ProjectsCTA({ trailImages }: ProjectsCTAProps) {
  const router = useRouter();
  const lenis = useLenis();
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [leaving, setLeaving] = useState(false);
  const [trailActive, setTrailActive] = useState(false);

  useEffect(() => {
    router.prefetch('/projects');
  }, [router]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setTrailActive(Boolean(entry?.isIntersecting)),
      { threshold: 0.35 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const goToProjects = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (leaving) return;
    setLeaving(true);

    const finish = () => {
      try {
        sessionStorage.setItem(PROJECTS_TRANSITION_KEY, '1');
      } catch {
        // ignore
      }
      router.push('/projects');
    };

    if (prefersReducedMotion) {
      finish();
      return;
    }

    const section = sectionRef.current;
    if (!section) {
      finish();
      return;
    }

    lenis?.stop();

    // Simple fade — no flare / label curtain.
    const overlay = document.createElement('div');
    overlay.setAttribute('aria-hidden', 'true');
    overlay.className = 'projects-cta-transition';
    overlay.innerHTML = `<div class="projects-cta-transition__ink"></div>`;
    document.body.appendChild(overlay);

    const ink = overlay.querySelector<HTMLElement>('.projects-cta-transition__ink');
    const headline = section.querySelector('h2');
    const link = linkRef.current;

    gsap.set(overlay, { pointerEvents: 'all' });
    gsap.set(ink, { opacity: 0 });

    gsap
      .timeline({
        onComplete: () => {
          finish();
          window.setTimeout(() => overlay.remove(), 200);
        },
      })
      .to([headline, link].filter(Boolean), {
        opacity: 0,
        duration: 0.25,
        ease: 'power2.out',
      })
      .to(ink, { opacity: 1, duration: 0.3, ease: 'power2.inOut' }, 0.05);
  };

  return (
    <section
      ref={sectionRef}
      data-projects-cta
      className="relative z-10 -mt-[100dvh] flex h-dvh min-h-dvh flex-col items-center justify-center overflow-clip rounded-b-[2.5rem] px-gutter py-24 text-center text-ink md:rounded-b-[3.5rem]"
      style={{ backgroundColor: '#F1F1F1' }}
    >
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="font-display max-w-[16ch] text-[clamp(2.25rem,6vw,5rem)] font-normal leading-[1.05] tracking-[-0.035em]">
          Wanna have a nice experience looking at our projects?
        </h2>
        <a
          ref={linkRef}
          href="/projects"
          onClick={goToProjects}
          aria-disabled={leaving || undefined}
          className="group relative z-20 mt-10 inline-flex items-center gap-3 font-display text-[clamp(1.25rem,2.5vw,1.75rem)] tracking-[-0.02em] text-ink transition-colors duration-300 hover:text-vermilion"
        >
          <span className="border-b border-ink/30 pb-0.5 transition-colors duration-300 group-hover:border-vermilion">
            Press here
          </span>
          <span
            aria-hidden="true"
            data-hover-arrow
            className="translate-y-px transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </div>

      <ProjectsCursorTrail active={trailActive && !leaving} images={trailImages} />
    </section>
  );
}
