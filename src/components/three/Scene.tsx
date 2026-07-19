'use client';

import { AdaptiveDpr } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';

import { useReducedMotion } from '@/hooks/useReducedMotion';
import { getQualitySettings, isWebGLAvailable } from '@/lib/three/perf';

function RenderController({ active }: { active: boolean }) {
  const { invalidate } = useThree();

  useEffect(() => {
    if (active) invalidate();
  }, [active, invalidate]);

  useEffect(() => {
    if (!active) return;

    const handleVisibility = () => {
      if (document.visibilityState === 'visible') invalidate();
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () =>
      document.removeEventListener('visibilitychange', handleVisibility);
  }, [active, invalidate]);

  return null;
}

function SceneCanvas() {
  const quality = getQualitySettings();
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) setActive(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 -z-10">
      <Canvas
        dpr={quality.dpr}
        frameloop={active ? 'demand' : 'never'}
        gl={{
          antialias: false,
          powerPreference: 'high-performance',
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <AdaptiveDpr pixelated />
        <RenderController active={active} />
      </Canvas>
    </div>
  );
}

function SceneFallback() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 bg-ink"
      aria-hidden="true"
    >
      {/* TODO: Replace with static WebGL poster image at /images/scene-poster.webp */}
    </div>
  );
}

export function Scene() {
  const prefersReducedMotion = useReducedMotion();
  const canRenderWebGL = isWebGLAvailable();

  if (prefersReducedMotion || !canRenderWebGL) {
    return <SceneFallback />;
  }

  return <SceneCanvas />;
}
