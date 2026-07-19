'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { projects } from '@/components/projects/legacy/data';
import { initSphericalGallery } from '@/components/projects/legacy/sphericalGalleryEngine';
import { useLenis } from '@/hooks/useLenis';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { PROJECTS_TRANSITION_KEY } from '@/lib/constants';
import { gsap } from '@/lib/gsap';
import { isWebGLAvailable } from '@/lib/three/perf';

import '@/components/projects/legacy/spherical-gallery.css';

const FONT_HREF =
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=JetBrains+Mono:wght@300;400;500;700&family=Share+Tech+Mono&display=swap';

function ensureGalleryFonts() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('spherical-gallery-fonts')) return;

  const preconnectA = document.createElement('link');
  preconnectA.rel = 'preconnect';
  preconnectA.href = 'https://fonts.googleapis.com';

  const preconnectB = document.createElement('link');
  preconnectB.rel = 'preconnect';
  preconnectB.href = 'https://fonts.gstatic.com';
  preconnectB.crossOrigin = 'anonymous';

  const link = document.createElement('link');
  link.id = 'spherical-gallery-fonts';
  link.rel = 'stylesheet';
  link.href = FONT_HREF;

  document.head.append(preconnectA, preconnectB, link);
}

/**
 * Exact spherical gallery from the scratch prototype, mounted under Vanguard’s navbar.
 */
export function ProjectsExperience() {
  const lenis = useLenis();
  const prefersReducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);
  const [webgl, setWebgl] = useState(true);

  useEffect(() => {
    setWebgl(isWebGLAvailable());
  }, []);

  useEffect(() => {
    document.documentElement.classList.add('gallery-lock');
    document.body.classList.add('gallery-lock');
    document.body.style.overflow = 'hidden';
    lenis?.stop();

    return () => {
      document.documentElement.classList.remove('gallery-lock');
      document.body.classList.remove('gallery-lock');
      document.body.style.overflow = '';
      document.body.style.cursor = '';
      lenis?.start();
      window.scrollTo(0, 0);
    };
  }, [lenis]);

  useEffect(() => {
    if (!webgl) return;
    ensureGalleryFonts();
    const root = rootRef.current;
    if (!root) return;

    const dispose = initSphericalGallery(root);
    return () => dispose();
  }, [webgl]);

  useEffect(() => {
    const veil = veilRef.current;
    if (!veil) return;

    let fromCta = false;
    try {
      fromCta = sessionStorage.getItem(PROJECTS_TRANSITION_KEY) === '1';
      sessionStorage.removeItem(PROJECTS_TRANSITION_KEY);
    } catch {
      fromCta = false;
    }

    if (prefersReducedMotion || !fromCta) {
      gsap.set(veil, { autoAlpha: 0 });
      return;
    }

    // Short handoff veil — cards pop in underneath immediately.
    gsap.set(veil, { autoAlpha: 1 });
    gsap.to(veil, {
      autoAlpha: 0,
      duration: 0.35,
      ease: 'power2.out',
    });
  }, [prefersReducedMotion]);

  if (!webgl) {
    return (
      <main className="min-h-dvh bg-[#050505] px-6 py-28 text-white">
        <h1 className="text-3xl font-medium">Projects</h1>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.id} className="overflow-hidden rounded-xl border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.image} alt="" className="aspect-[4/3] w-full object-cover" />
              <div className="p-4">
                <p className="font-mono text-[11px] tracking-[0.18em] text-white/50 uppercase">
                  {project.title} · {project.year}
                </p>
                <h2 className="mt-2 text-lg">{project.subtitle}</h2>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-white/40">
          WebGL unavailable —{' '}
          <Link href="/" className="underline">
            back home
          </Link>
          .
        </p>
      </main>
    );
  }

  return (
    <main className="relative h-dvh w-full overflow-hidden bg-[#050505]">
      <div ref={rootRef} className="spherical-gallery">
        <div id="canvas-container" />
        <div className="vignette" />

        <div className="sidebar-tools">
          <button id="grid-toggle-btn" className="tool-btn" aria-label="Toggle Grid View" type="button">
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </button>
          <button id="info-btn" className="tool-btn" aria-label="View Info" type="button">
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="9" x2="20" y2="9" />
              <line x1="4" y1="15" x2="20" y2="15" />
              <line x1="10" y1="3" x2="6" y2="21" />
              <line x1="18" y1="3" x2="14" y2="21" />
            </svg>
          </button>
        </div>

        <div className="interaction-hint mono-text">
          <span>HOLD & DRAG TO EXPLORE SPHERE</span>
        </div>

        <div
          id="detail-overlay"
          className="detail-overlay"
          data-lenis-prevent
          data-lenis-prevent-wheel
        >
          <div className="detail-content">
            <div className="detail-header">
              <div className="detail-title-group">
                <span id="detail-client" className="mono-text detail-client">
                  GOOGLE
                </span>
                <h1 id="detail-title">Google Cloud BigQuery</h1>
              </div>

              <div className="detail-aside">
                <button
                  id="detail-close-btn"
                  className="detail-close-btn"
                  aria-label="Close project"
                  type="button"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>

                <div className="detail-meta mono-text">
                  <div className="meta-block">
                    <span className="meta-label">YEAR</span>
                    <span id="detail-year" className="meta-value">
                      2025
                    </span>
                  </div>
                  <div className="meta-block">
                    <span className="meta-label">TAGS</span>
                    <div id="detail-tags" className="meta-value tags-list">
                      <span>WEBSITE</span>
                      <span>AI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="detail-gallery" className="detail-gallery" />

            <div className="detail-body">
              <div className="detail-left">
                <p className="detail-lead">
                  An immersive, state-of-the-art interactive campaign pushing the boundaries of
                  technology and creativity to tell a compelling brand story.
                </p>
              </div>
              <div className="detail-right">
                <p>
                  We partnered with the client to conceptualize, design, and engineer a unique digital
                  ecosystem. By blending high-performance 3D animations, custom shader effects, and an
                  intuitive user interface, we crafted an award-winning digital experience that drives
                  massive engagement and positions them as pioneers in their field.
                </p>
                <div className="detail-actions">
                  <a href="#" target="_blank" className="btn btn-secondary mono-text" rel="noreferrer">
                    VISIT LIVE SITE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={veilRef}
        className="pointer-events-none absolute inset-0 z-50 bg-[#050505]"
        aria-hidden="true"
      />
    </main>
  );
}
