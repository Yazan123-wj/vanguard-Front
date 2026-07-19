'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Scene = dynamic(
  () => import('@/components/three/Scene').then((mod) => ({ default: mod.Scene })),
  { ssr: false },
);

/**
 * Global R3F canvas. Unmounted on /projects (gallery owns WebGL), then
 * remounted on the next frame after leaving so contexts aren't contested.
 */
export function SceneLayer() {
  const pathname = usePathname();
  const onProjects = pathname.startsWith('/projects');
  const [ready, setReady] = useState(!onProjects);

  useEffect(() => {
    if (onProjects) {
      setReady(false);
      return;
    }

    // Defer remount one frame so the projects GL context can release.
    setReady(false);
    const frame = window.requestAnimationFrame(() => {
      setReady(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [onProjects]);

  if (onProjects || !ready) {
    return null;
  }

  return <Scene key="vanguard-scene" />;
}
