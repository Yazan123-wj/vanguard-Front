export type NavLink = (typeof import('@/lib/constants').NAV_LINKS)[number];

export type DeviceTier = 'low' | 'medium' | 'high';

export type QualitySettings = {
  tier: DeviceTier;
  dpr: [number, number];
  enablePostProcessing: boolean;
  geometrySegments: number;
};
