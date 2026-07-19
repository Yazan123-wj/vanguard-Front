'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useRef, useState, type MouseEvent } from 'react';

import { AudioToggle } from '@/components/layout/AudioToggle';
import { NAVBAR_DELAY } from '@/components/hero/hero.constants';
import { NavbarLink } from '@/components/layout/NavbarLink';
import { useLenis } from '@/hooks/useLenis';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { NAV_LINKS } from '@/lib/constants';
import { gsap, useGSAP } from '@/lib/gsap';
import { useLoader } from '@/providers/LoaderProvider';

export function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const lenis = useLenis();
  const prefersReducedMotion = useReducedMotion();
  const { registerOnComplete } = useLoader();
  // Keep entrance visibility in React state so pathname re-renders don't
  // stomp GSAP and reset the bar to opacity: 0.
  const [entered, setEntered] = useState(false);

  const goHome = useCallback(
    (event?: MouseEvent<HTMLAnchorElement>) => {
      event?.preventDefault();

      // Clear gallery side-effects before soft-routing so Home doesn't blank
      // and we don't need a full reload (which would replay the loader).
      document.documentElement.classList.remove('gallery-lock');
      document.body.classList.remove('gallery-lock');
      document.body.style.overflow = '';
      document.body.style.cursor = '';
      document.querySelectorAll('.projects-cta-transition').forEach((node) => {
        node.remove();
      });
      lenis?.start();

      if (pathname !== '/') {
        router.push('/');
        return;
      }

      if (lenis) {
        lenis.scrollTo(0, { immediate: false });
        return;
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [lenis, pathname, router],
  );

  // Entrance only — stay pinned for the curtain scroll. No hide-on-scroll;
  // translating the bar up reads as the navbar "moving" with the page.
  useGSAP(
    () => {
      const header = headerRef.current;
      if (!header) return;

      if (entered) {
        gsap.set(header, { opacity: 1, y: 0, clearProps: 'transform' });
        return;
      }

      if (prefersReducedMotion) {
        gsap.set(header, { opacity: 1, y: 0, clearProps: 'transform' });
        setEntered(true);
        return;
      }

      gsap.set(header, { opacity: 0, y: -16 });

      const show = () => {
        gsap.to(header, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'vanguard.out',
          delay: NAVBAR_DELAY,
          onComplete: () => {
            // Drop the transform so position:fixed stays viewport-true.
            gsap.set(header, { clearProps: 'transform' });
            setEntered(true);
          },
        });
      };

      return registerOnComplete(show);
    },
    { scope: headerRef, dependencies: [prefersReducedMotion, entered] },
  );

  return (
    <header
      ref={headerRef}
      className="pointer-events-none fixed inset-x-gutter top-gutter z-[60]"
      style={{ opacity: entered ? 1 : 0 }}
    >
      <nav
        aria-label="Main"
        className="pointer-events-auto border-line flex items-center justify-between rounded-full border bg-veil px-6 py-3 backdrop-blur-[12px]"
      >
        <Link
          href="/"
          onClick={goHome}
          className="font-display text-lg tracking-tight text-paper"
        >
          Vanguard
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavbarLink
                label={link.label}
                href={link.href}
                active={
                  link.href === '/'
                    ? pathname === '/'
                    : pathname === link.href ||
                      pathname.startsWith(`${link.href}/`)
                }
                onClick={link.href === '/' ? goHome : undefined}
              />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <AudioToggle />

          <button
            type="button"
            aria-label="Account"
            onClick={() => {
              // Account action — later phase
            }}
            className="flex size-10 items-center justify-center rounded-full bg-ink-700 text-ink-200 transition-colors duration-300 hover:text-paper"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => {
              // Menu overlay — later phase
            }}
            className="flex size-10 flex-col items-center justify-center gap-1.5 rounded-full md:hidden"
          >
            <span className="block h-px w-5 bg-paper" />
            <span className="block h-px w-5 bg-paper" />
          </button>
        </div>
      </nav>
    </header>
  );
}
