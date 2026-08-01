'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useRef, useState, type MouseEvent } from 'react';

import { AudioToggle } from '@/components/layout/AudioToggle';
import {
  StaggeredMenu,
  type StaggeredMenuItem,
} from '@/components/layout/StaggeredMenu';
import { NAVBAR_DELAY } from '@/components/hero/hero.constants';
import { useLenis } from '@/hooks/useLenis';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { NAV_LINKS, SITE } from '@/lib/constants';
import { gsap, useGSAP } from '@/lib/gsap';
import { useLoader } from '@/providers/LoaderProvider';

const SOCIAL_ITEMS = [
  { label: 'Instagram', link: 'https://instagram.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' },
  { label: 'X', link: 'https://x.com' },
];

export function Navbar() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const lenis = useLenis();
  const prefersReducedMotion = useReducedMotion();
  const { registerOnComplete } = useLoader();
  const [entered, setEntered] = useState(false);

  const clearGallerySideEffects = useCallback(() => {
    document.documentElement.classList.remove('gallery-lock');
    document.body.classList.remove('gallery-lock');
    document.body.style.overflow = '';
    document.body.style.cursor = '';
    document.querySelectorAll('.projects-cta-transition').forEach((node) => {
      node.remove();
    });
    lenis?.start();
  }, [lenis]);

  const goHome = useCallback(
    (event?: MouseEvent<HTMLAnchorElement>) => {
      event?.preventDefault();
      clearGallerySideEffects();

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
    [clearGallerySideEffects, lenis, pathname, router],
  );

  const handleMenuOpen = useCallback(() => {
    document.documentElement.classList.add('menu-open');
    lenis?.stop();
  }, [lenis]);

  const handleMenuClose = useCallback(() => {
    document.documentElement.classList.remove('menu-open');
    if (!document.body.classList.contains('gallery-lock')) {
      lenis?.start();
    }
  }, [lenis]);

  const menuItems: StaggeredMenuItem[] = NAV_LINKS.map((link) => ({
    label: link.label,
    ariaLabel: `Go to ${link.label}`,
    link: link.href,
    onClick: link.href === '/' ? goHome : undefined,
  }));

  useGSAP(
    () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      if (entered) {
        gsap.set(wrapper, { opacity: 1 });
        return;
      }

      if (prefersReducedMotion) {
        gsap.set(wrapper, { opacity: 1 });
        setEntered(true);
        return;
      }

      gsap.set(wrapper, { opacity: 0 });

      const show = () => {
        gsap.to(wrapper, {
          opacity: 1,
          duration: 0.6,
          ease: 'vanguard.out',
          delay: NAVBAR_DELAY,
          onComplete: () => setEntered(true),
        });
      };

      return registerOnComplete(show);
    },
    { scope: wrapperRef, dependencies: [prefersReducedMotion, entered] },
  );

  // Public chrome (menu + ambient audio) stays off the admin panel entirely.
  if (pathname.startsWith('/admin')) return null;

  return (
    <div ref={wrapperRef} style={{ opacity: entered ? 1 : 0 }}>
      <StaggeredMenu
        isFixed
        position="right"
        items={menuItems}
        socialItems={SOCIAL_ITEMS}
        displaySocials
        displayItemNumbering
        logoUrl={SITE.logo}
        logoLabel={SITE.name}
        logoHref="/"
        onLogoClick={goHome}
        colors={['#1f1f1f', '#fb4616']}
        accentColor="#fb4616"
        menuButtonColor="#ffffff"
        openMenuButtonColor="#0a0a0a"
        changeMenuColorOnOpen
        closeOnClickAway
        onMenuOpen={handleMenuOpen}
        onMenuClose={handleMenuClose}
      />

      {!pathname.startsWith('/projects') ? (
        <div
          data-audio-dock
          className="pointer-events-auto fixed bottom-gutter left-gutter z-[70]"
        >
          <AudioToggle />
        </div>
      ) : null}
    </div>
  );
}
