'use client';

import { usePathname } from 'next/navigation';

import { Loader } from '@/components/loader/Loader';
import { Navbar } from '@/components/layout/Navbar';
import { NavigationEffects } from '@/components/layout/NavigationEffects';
import { SceneLayer } from '@/components/layout/SceneLayer';

/**
 * Public-site chrome only. Admin routes skip loader, nav, and WebGL entirely
 * so the CMS stays fast.
 */
export function SiteChrome() {
  const pathname = usePathname();
  if (pathname.startsWith('/admin')) return null;

  return (
    <>
      <Loader />
      <NavigationEffects />
      <SceneLayer />
      <Navbar />
    </>
  );
}
