'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

import type { Project } from '@/components/projects/projects.data';
import { useLenis } from '@/hooks/useLenis';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { gsap } from '@/lib/gsap';

type ProjectDetailProps = {
  project: Project;
};

/**
 * Basic project template — focus stays on the gallery; this is the land page.
 */
export function ProjectDetail({ project }: ProjectDetailProps) {
  const rootRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const lenis = useLenis();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    lenis?.start();
    document.documentElement.classList.remove('gallery-lock');
    document.body.classList.remove('gallery-lock');
  }, [lenis]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion) return;

    const parts = root.querySelectorAll('[data-detail-anim]');
    gsap.fromTo(
      parts,
      { autoAlpha: 0, y: 28 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.05,
      },
    );
  }, [prefersReducedMotion, project.slug]);

  const back = () => {
    if (prefersReducedMotion) {
      router.push('/projects');
      return;
    }

    const root = rootRef.current;
    if (!root) {
      router.push('/projects');
      return;
    }

    gsap.to(root, {
      autoAlpha: 0,
      y: -12,
      duration: 0.35,
      ease: 'power2.in',
      onComplete: () => router.push('/projects'),
    });
  };

  return (
    <main
      ref={rootRef}
      className="min-h-dvh bg-ink px-gutter pt-28 pb-20 text-paper md:pt-32"
    >
      <div className="mx-auto max-w-5xl">
        <button
          type="button"
          data-detail-anim
          onClick={back}
          className="font-mono text-[11px] tracking-[0.2em] text-paper/55 uppercase transition-colors hover:text-paper"
        >
          ← Back to gallery
        </button>

        <p
          data-detail-anim
          className="mt-10 font-mono text-[12px] tracking-[0.2em] text-paper/50 uppercase"
        >
          {project.client} · {project.year}
        </p>

        <h1
          data-detail-anim
          className="font-display mt-4 text-[clamp(2.5rem,7vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.035em]"
        >
          {project.title}
        </h1>

        <ul
          data-detail-anim
          className="mt-6 flex flex-wrap gap-2"
        >
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/25 px-3 py-1 font-mono text-[10px] tracking-[0.16em] uppercase"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div
          data-detail-anim
          className="mt-12 overflow-hidden rounded-[1.5rem]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt=""
            className="aspect-[16/10] w-full object-cover"
          />
        </div>

        <p
          data-detail-anim
          className="mt-10 max-w-[42ch] text-body-lg text-paper/70"
        >
          {project.summary}
        </p>

        <p data-detail-anim className="mt-16 font-mono text-[11px] text-paper/40">
          Detail template — gallery is the focus. Full case study later.
        </p>

        <Link
          data-detail-anim
          href="/projects"
          className="mt-6 inline-block border-b border-white/30 pb-0.5 font-display text-lg transition-colors hover:border-vermilion hover:text-vermilion"
        >
          Explore more work
        </Link>
      </div>
    </main>
  );
}
