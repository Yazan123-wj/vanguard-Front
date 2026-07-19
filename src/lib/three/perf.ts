import type { DeviceTier, QualitySettings } from '@/types';

function getDeviceTier(): DeviceTier {
  if (typeof window === 'undefined') return 'medium';

  const cores = navigator.hardwareConcurrency ?? 4;
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (cores <= 4 || memory <= 4 || isMobile) return 'low';
  if (cores >= 8 && memory >= 8) return 'high';
  return 'medium';
}

export function getQualitySettings(): QualitySettings {
  const tier = getDeviceTier();

  switch (tier) {
    case 'low':
      return {
        tier,
        dpr: [1, 1],
        enablePostProcessing: false,
        geometrySegments: 16,
      };
    case 'high':
      return {
        tier,
        dpr: [1, 2],
        enablePostProcessing: true,
        geometrySegments: 64,
      };
    default:
      return {
        tier,
        dpr: [1, 1.5],
        enablePostProcessing: true,
        geometrySegments: 32,
      };
  }
}

export function isWebGLAvailable(): boolean {
  if (typeof window === 'undefined') return false;

  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      canvas.getContext('webgl2') ?? canvas.getContext('webgl'),
    );
  } catch {
    return false;
  }
}
