import { MathUtils, Vector3 } from 'three';

import type { Project } from '@/components/projects/projects.data';

export const SPHERE_RADIUS = 4.35;
/** World scale of each image plate — large enough to read titles. */
export const CARD_SCALE = 1.55;

/** Odd column count so a card sits on -Z (screen center). */
export const GRID_COLS = 11;
export const GRID_ROWS = 4;

export type CardPose = {
  project: Project;
  position: Vector3;
  normal: Vector3;
};

/**
 * Maps projects onto the inner sphere in a dense lat/long grid.
 * Projects repeat to fill the sphere so drag always reveals work.
 */
export function layoutProjectsOnSphere(projects: readonly Project[]): CardPose[] {
  const poses: CardPose[] = [];
  const cols = GRID_COLS;
  const rows = GRID_ROWS;
  const capacity = cols * rows;

  const thetaSpan = Math.PI * 2;
  const phiSpan = MathUtils.degToRad(70);
  const phiCenter = Math.PI / 2;

  const count = Math.max(capacity, projects.length);

  for (let index = 0; index < count; index++) {
    const project = projects[index % projects.length];
    if (!project) continue;

    const col = index % cols;
    const row = Math.floor(index / cols) % rows;

    const u = (col + 0.5) / cols;
    const v = (row + 0.5) / rows;

    // u=0.5 → θ=π → -Z (camera forward).
    const theta = u * thetaSpan;
    const phi = phiCenter - phiSpan / 2 + v * phiSpan;

    const position = new Vector3().setFromSphericalCoords(
      SPHERE_RADIUS,
      phi,
      theta,
    );
    const normal = position.clone().normalize();

    poses.push({ project, position, normal });
  }

  return poses;
}
