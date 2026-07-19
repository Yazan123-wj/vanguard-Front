'use client';

import { BackSide } from 'three';

import { SPHERE_RADIUS } from '@/components/projects/sphereLayout';

/**
 * Dark inner dome + subtle lat/long wireframe — the “inside a sphere” shell.
 * raycast disabled so card picking isn't blocked by the shell.
 */
export function SphereEnvironment() {
  const r = SPHERE_RADIUS + 0.35;
  const noRaycast = { raycast: () => undefined };

  return (
    <group>
      <mesh {...noRaycast}>
        <sphereGeometry args={[r, 64, 48]} />
        <meshBasicMaterial color="#050505" side={BackSide} depthWrite={false} />
      </mesh>

      <mesh {...noRaycast}>
        <sphereGeometry args={[r - 0.02, 24, 16]} />
        <meshBasicMaterial
          color="#2a2a2a"
          wireframe
          transparent
          opacity={0.28}
          side={BackSide}
          depthWrite={false}
        />
      </mesh>

      <mesh {...noRaycast}>
        <sphereGeometry args={[r - 0.04, 48, 24]} />
        <meshBasicMaterial
          color="#1f1f1f"
          wireframe
          transparent
          opacity={0.14}
          side={BackSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
