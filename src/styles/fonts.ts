import localFont from 'next/font/local';

/**
 * TODO: Drop `display.woff2` into public/fonts/ before production build.
 * Wide/condensed grotesk — variable weight, used large and sparingly.
 */
export const fontDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/display.woff2',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-display',
  display: 'swap',
  preload: true,
});

/**
 * TODO: Drop `body.woff2` into public/fonts/ before production build.
 * Neutral grotesk — high legibility at 16–18px.
 */
export const fontBody = localFont({
  src: [
    {
      path: '../../public/fonts/body.woff2',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-body',
  display: 'swap',
  preload: true,
});
