'use client';

import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

type SphereControlsProps = {
  enabled: boolean;
};

/**
 * Orbit the camera inside the sphere with damping (Lenis-like ease-out).
 * Drag state is exposed so card clicks can ignore drag releases.
 */
export function SphereControls({ enabled }: SphereControlsProps) {
  const { gl } = useThree();
  const drag = useRef({ moved: false, x: 0, y: 0 });

  useEffect(() => {
    (
      window as Window & { __galleryDragMoved?: () => boolean }
    ).__galleryDragMoved = () => drag.current.moved;

    const el = gl.domElement;
    el.style.cursor = 'grab';

    const onDown = (e: PointerEvent) => {
      drag.current.moved = false;
      drag.current.x = e.clientX;
      drag.current.y = e.clientY;
      el.style.cursor = 'grabbing';
    };
    const onMove = (e: PointerEvent) => {
      if (e.buttons !== 1) return;
      if (
        Math.abs(e.clientX - drag.current.x) +
          Math.abs(e.clientY - drag.current.y) >
        8
      ) {
        drag.current.moved = true;
      }
    };
    const onUp = () => {
      el.style.cursor = 'grab';
    };

    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerup', onUp);

    return () => {
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerup', onUp);
      delete (window as Window & { __galleryDragMoved?: () => boolean })
        .__galleryDragMoved;
      el.style.cursor = '';
    };
  }, [gl]);

  return (
    <OrbitControls
      enabled={enabled}
      enablePan={false}
      enableZoom={false}
      enableDamping
      dampingFactor={0.085}
      rotateSpeed={0.55}
      minPolarAngle={Math.PI * 0.28}
      maxPolarAngle={Math.PI * 0.72}
      target={[0, 0, 0]}
    />
  );
}

export function wasGalleryDrag(): boolean {
  return Boolean(
    (window as Window & { __galleryDragMoved?: () => boolean })
      .__galleryDragMoved?.(),
  );
}
