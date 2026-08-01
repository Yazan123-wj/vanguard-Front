/** Returns true when a CSS color is opaque enough and perceptually light. */
export function isLightSurface(color: string): boolean | null {
  const match = color.match(/rgba?\(([^)]+)\)/i);
  if (!match?.[1]) return null;

  const parts = match[1].split(',').map((part) => parseFloat(part.trim()));
  if (parts.length < 3 || parts.some((n) => Number.isNaN(n))) return null;

  const [r = 0, g = 0, b = 0, a = 1] = parts;
  if (a < 0.2) return null;

  // Relative luminance (sRGB, approx).
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance >= 0.58;
}

/**
 * Ink = dark text/icons (for light backgrounds).
 * Paper = light text/icons (for dark backgrounds).
 */
export type SurfaceInk = 'ink' | 'paper';

export function contrastAtPoint(x: number, y: number): SurfaceInk {
  if (
    typeof document === 'undefined' ||
    x < 0 ||
    y < 0 ||
    x > window.innerWidth ||
    y > window.innerHeight
  ) {
    return 'paper';
  }

  const stack = document.elementsFromPoint(x, y);
  for (const el of stack) {
    if (!(el instanceof Element)) continue;
    if (el.closest('.staggered-menu-wrapper')) continue;
    if (el.closest('[data-audio-dock]')) continue;

    const bg = getComputedStyle(el).backgroundColor;
    const light = isLightSurface(bg);
    if (light === null) continue;
    return light ? 'ink' : 'paper';
  }

  return 'paper';
}

export function contrastForElement(el: Element | null): SurfaceInk {
  if (!el) return 'paper';
  const rect = el.getBoundingClientRect();
  if (rect.width === 0 || rect.height === 0) return 'paper';
  return contrastAtPoint(rect.left + rect.width / 2, rect.top + rect.height / 2);
}
