'use client';

import { AdaptiveDpr } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useMemo } from 'react';
import { NoToneMapping, SRGBColorSpace } from 'three';

import { GalleryCardMesh } from '@/components/projects/GalleryCardMesh';
import { PROJECTS } from '@/components/projects/projects.data';
import {
  SphereControls,
  wasGalleryDrag,
} from '@/components/projects/SphereControls';
import { SphereEnvironment } from '@/components/projects/SphereEnvironment';
import { layoutProjectsOnSphere } from '@/components/projects/sphereLayout';
import { getQualitySettings } from '@/lib/three/perf';

type SphericalGalleryProps = {
  onSelectProject: (slug: string) => void;
  interactive?: boolean;
};

function GalleryScene({
  onSelectProject,
  interactive,
}: SphericalGalleryProps) {
  const poses = useMemo(() => layoutProjectsOnSphere(PROJECTS), []);

  const handleSelect = (slug: string) => {
    if (wasGalleryDrag()) return;
    onSelectProject(slug);
  };

  return (
    <>
      <color attach="background" args={['#000000']} />
      <fog attach="fog" args={['#000000', 5.8, 9.5]} />

      {/*
        Cards stay world-fixed; the CAMERA orbits inside the sphere.
        This matches phantom.land and keeps R3F pointer events reliable.
      */}
      <group name="gallery-rig">
        <SphereEnvironment />
        {poses.map((pose, i) => (
          <Suspense
            key={`${pose.project.slug}-${i}`}
            fallback={
              <mesh position={pose.position} scale={[1.55, 1.55, 1]}>
                <planeGeometry args={[1.2, 1.4]} />
                <meshBasicMaterial color="#1a1a1a" />
              </mesh>
            }
          >
            <GalleryCardMesh pose={pose} onSelect={handleSelect} />
          </Suspense>
        ))}
      </group>

      <SphereControls enabled={interactive !== false} />
    </>
  );
}

export function SphericalGallery({
  onSelectProject,
  interactive = true,
}: SphericalGalleryProps) {
  const quality = getQualitySettings();

  return (
    <div className="absolute inset-0 touch-none">
      <Canvas
        dpr={quality.dpr}
        camera={{
          fov: 58,
          near: 0.1,
          far: 40,
          // Sit at the sphere center — offset made the wall feel distant.
          position: [0, 0, 0.02],
        }}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          alpha: false,
        }}
        onCreated={({ camera, gl }) => {
          camera.lookAt(0, 0, -1);
          gl.toneMapping = NoToneMapping;
          gl.outputColorSpace = SRGBColorSpace;
          gl.setClearColor('#000000');
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <AdaptiveDpr pixelated />
        <GalleryScene
          onSelectProject={onSelectProject}
          interactive={interactive}
        />
      </Canvas>
    </div>
  );
}
