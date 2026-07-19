'use client';

import { useTexture } from '@react-three/drei';
import { useEffect, useMemo, useState } from 'react';
import {
  CanvasTexture,
  FrontSide,
  LinearFilter,
  Matrix4,
  Object3D,
  SRGBColorSpace,
  Vector3,
  type Texture,
} from 'three';

import type { Project } from '@/components/projects/projects.data';
import type { CardPose } from '@/components/projects/sphereLayout';
import { CARD_SCALE } from '@/components/projects/sphereLayout';

type GalleryCardMeshProps = {
  pose: CardPose;
  onSelect: (slug: string) => void;
};

const _x = new Vector3();
const _y = new Vector3();
const _z = new Vector3();
const _m = new Matrix4();

/**
 * Orient the plane so +Z faces the sphere center, with world-up preserved
 * (avoids lookAt flipping cards upside-down near the poles).
 */
function faceCenter(position: Vector3) {
  // Plane front (+Z) points inward toward the camera at the origin.
  _z.copy(position).normalize().negate();
  _y.set(0, 1, 0);
  _x.crossVectors(_y, _z);
  if (_x.lengthSq() < 1e-6) {
    _y.set(0, 0, Math.sign(position.y) || 1);
    _x.crossVectors(_y, _z);
  }
  _x.normalize();
  _y.crossVectors(_z, _x).normalize();
  _m.makeBasis(_x, _y, _z);

  const obj = new Object3D();
  obj.quaternion.setFromRotationMatrix(_m);
  return obj.quaternion.clone();
}

function composeCardTexture(image: Texture, project: Project): CanvasTexture {
  // Higher res + no mipmaps keeps type sharp when the plate is close.
  const size = 2048;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.fillStyle = '#050505';
  ctx.fillRect(0, 0, size, size);

  ctx.fillStyle = '#ffffff';
  ctx.font = '700 96px ui-sans-serif, system-ui, sans-serif';
  ctx.textBaseline = 'top';
  ctx.textAlign = 'center';
  ctx.fillText(project.client.toUpperCase(), size / 2, 72);

  ctx.font = '600 56px ui-sans-serif, system-ui, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.75)';
  ctx.fillText(project.title.toUpperCase(), size / 2, 188);

  const imgSize = 1400;
  const imgX = (size - imgSize) / 2;
  const imgY = 300;
  const source = image.image as
    | HTMLImageElement
    | HTMLCanvasElement
    | ImageBitmap
    | undefined;

  ctx.save();
  const r = 48;
  ctx.beginPath();
  ctx.moveTo(imgX + r, imgY);
  ctx.arcTo(imgX + imgSize, imgY, imgX + imgSize, imgY + imgSize, r);
  ctx.arcTo(imgX + imgSize, imgY + imgSize, imgX, imgY + imgSize, r);
  ctx.arcTo(imgX, imgY + imgSize, imgX, imgY, r);
  ctx.arcTo(imgX, imgY, imgX + imgSize, imgY, r);
  ctx.closePath();
  ctx.clip();

  if (source) {
    ctx.drawImage(source as CanvasImageSource, imgX, imgY, imgSize, imgSize);
  } else {
    ctx.fillStyle = '#222';
    ctx.fillRect(imgX, imgY, imgSize, imgSize);
  }
  ctx.restore();

  const tagY = size - 200;
  ctx.font = '600 48px ui-sans-serif, system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(255,255,255,0.85)';
  const tagLine = project.tags.map((t) => t.toUpperCase()).join('  ·  ');
  ctx.fillText(tagLine, size / 2, tagY);

  ctx.font = '500 44px ui-sans-serif, system-ui, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.55)';
  ctx.fillText(project.year, size / 2, tagY + 72);

  const map = new CanvasTexture(canvas);
  map.colorSpace = SRGBColorSpace;
  map.generateMipmaps = false;
  map.minFilter = LinearFilter;
  map.magFilter = LinearFilter;
  map.anisotropy = 16;
  map.needsUpdate = true;
  return map;
}

export function GalleryCardMesh({ pose, onSelect }: GalleryCardMeshProps) {
  const image = useTexture(pose.project.image);
  image.colorSpace = SRGBColorSpace;
  const [cardMap, setCardMap] = useState<CanvasTexture | null>(null);

  useEffect(() => {
    let disposed = false;
    let map: CanvasTexture | null = null;

    const build = () => {
      if (disposed) return;
      map = composeCardTexture(image, pose.project);
      setCardMap(map);
    };

    const src = image.image as { complete?: boolean } | undefined;
    if (src && 'complete' in src && src.complete === false) {
      const el = image.image as HTMLImageElement;
      el.addEventListener('load', build, { once: true });
      return () => {
        disposed = true;
        el.removeEventListener('load', build);
        map?.dispose();
      };
    }

    build();
    return () => {
      disposed = true;
      map?.dispose();
    };
  }, [image, pose.project]);

  const { position, quaternion } = useMemo(
    () => ({
      position: pose.position.clone(),
      quaternion: faceCenter(pose.position),
    }),
    [pose.position],
  );

  if (!cardMap) return null;

  return (
    <mesh
      position={position}
      quaternion={quaternion}
      scale={[CARD_SCALE, CARD_SCALE, 1]}
      userData={{ slug: pose.project.slug }}
      onClick={(event) => {
        event.stopPropagation();
        onSelect(pose.project.slug);
      }}
      onPointerOver={(event) => {
        event.stopPropagation();
        document.body.style.cursor = 'pointer';
        event.object.scale.set(CARD_SCALE * 1.04, CARD_SCALE * 1.04, 1);
      }}
      onPointerOut={(event) => {
        document.body.style.cursor = 'grab';
        event.object.scale.set(CARD_SCALE, CARD_SCALE, 1);
      }}
    >
      <planeGeometry args={[1.2, 1.4]} />
      <meshBasicMaterial
        key={cardMap.uuid}
        map={cardMap}
        toneMapped={false}
        side={FrontSide}
      />
    </mesh>
  );
}
