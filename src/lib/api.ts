import type { GalleryProject } from '@/components/projects/legacy/data';
import { projects as FALLBACK_PROJECTS } from '@/components/projects/legacy/data';
import type { NoteCardData } from '@/components/sections/notes.data';
import { NOTES as FALLBACK_NOTES } from '@/components/sections/notes.data';
import type { StackCardData } from '@/components/sections/stackCards.data';
import {
  HOME_STACK_COUNT,
  STACK_CARDS as FALLBACK_SERVICES,
} from '@/components/sections/stackCards.data';

/**
 * Server-side data layer for the Django backend.
 * Every call falls back to the bundled static content when the API is down,
 * so the site keeps working without the backend running.
 */

const API_URL = process.env.API_URL ?? 'http://127.0.0.1:8001';

export type FooterData = {
  offices: readonly { city: string; address: string; phone: string }[];
  social: readonly { label: string; href: string }[];
  contactEmail: string;
};

const FALLBACK_FOOTER: FooterData = {
  offices: [
    {
      city: 'Vietnam',
      address: 'Midtown, Phu My Hung, Ho Chi Minh City',
      phone: '+84 91 9922034',
    },
    {
      city: 'China',
      address: '193 Lockart Road, Hong Kong',
      phone: '+86 186 16222144',
    },
    {
      city: 'Japan',
      address: '6 Chome–6–2 Kojimachi, Tokyo',
      phone: '+81 90 59480287',
    },
    {
      city: 'France',
      address: '64–66 Rue des Archives, 75003 Paris, France',
      phone: '+33 56 3264235',
    },
  ],
  social: [
    { label: 'Facebook', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
  contactEmail: 'hello@vanguard.studio',
};

async function fetchJson<T>(path: string, fallback: T): Promise<T> {
  try {
    const response = await fetch(`${API_URL}${path}`, {
      signal: AbortSignal.timeout(3000),
      // Always read fresh CMS content so admin publishes show up immediately.
      cache: 'no-store',
    });
    if (!response.ok) return fallback;
    return (await response.json()) as T;
  } catch {
    return fallback;
  }
}

export async function getServices(): Promise<StackCardData[]> {
  return fetchJson('/api/services/', [...FALLBACK_SERVICES]);
}

export async function getHomeServices(): Promise<StackCardData[]> {
  const services = await getServices();
  return services.slice(0, HOME_STACK_COUNT);
}

export async function getServiceBySlug(
  slug: string,
): Promise<StackCardData | undefined> {
  const services = await getServices();
  return services.find((service) => service.slug === slug);
}

export async function getGalleryProjects(): Promise<GalleryProject[]> {
  const projects = await fetchJson<GalleryProject[]>(
    '/api/projects/',
    [...FALLBACK_PROJECTS],
  );
  // Gallery cards need an image; skip drafts without one.
  return projects.filter((project) => project.image);
}

function sortNotesNewestFirst(notes: NoteCardData[]): NoteCardData[] {
  return [...notes].sort((a, b) => {
    const tb = Date.parse(b.date);
    const ta = Date.parse(a.date);
    return (Number.isNaN(tb) ? 0 : tb) - (Number.isNaN(ta) ? 0 : ta);
  });
}

/**
 * Published notes, newest-first.
 * Live API orders by last publish/update; static fallback sorts by date.
 */
export async function getNotes(): Promise<NoteCardData[]> {
  try {
    const response = await fetch(`${API_URL}/api/blogs/`, {
      signal: AbortSignal.timeout(3000),
      cache: 'no-store',
    });
    if (!response.ok) return sortNotesNewestFirst([...FALLBACK_NOTES]);
    return (await response.json()) as NoteCardData[];
  } catch {
    return sortNotesNewestFirst([...FALLBACK_NOTES]);
  }
}

/**
 * /blogs page: most recently published post is the hero featured piece.
 */
export async function getBlogsPageNotes(): Promise<{
  featured: NoteCardData | null;
  articles: NoteCardData[];
}> {
  const notes = await getNotes();
  if (!notes.length) return { featured: null, articles: [] };
  const [featured, ...rest] = notes;
  return { featured: featured ?? null, articles: rest };
}

export async function getNoteBySlug(
  slug: string,
): Promise<NoteCardData | undefined> {
  const notes = await getNotes();
  return notes.find((note) => note.slug === slug);
}

export async function getFooter(): Promise<FooterData> {
  return fetchJson('/api/footer/', FALLBACK_FOOTER);
}
