export const SITE = {
  name: 'Vanguard',
  title: 'Vanguard',
  description: 'Vanguard — production website.',
  url: 'https://vanguard.example.com',
  logo: '/brand/vanguard-logo.png',
  mark: '/brand/vanguard-mark.png',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact', href: '/contact' },
] as const;

// Rendered height of the navbar pill (py-3 + 40px avatar). The hero derives
// its top padding from this — no magic numbers in sections.
export const NAVBAR_HEIGHT = 64;

/** Session flag for the home CTA → /projects curtain handoff. */
export const PROJECTS_TRANSITION_KEY = 'vanguard-projects-transition';

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
