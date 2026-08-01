'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';

/** True only when the device supports real hover + a fine pointer (mouse/trackpad). */
export function useCanHover() {
  return useMediaQuery('(hover: hover) and (pointer: fine)');
}
