export type Project = {
  slug: string;
  client: string;
  title: string;
  year: string;
  tags: readonly string[];
  image: string;
  summary: string;
};

export const PROJECTS: readonly Project[] = [
  {
    slug: 'northstar-rebrand',
    client: 'Northstar',
    title: 'Identity System',
    year: '2025',
    tags: ['Brand', 'Motion'],
    image: '/images/projects/p1.jpg',
    summary:
      'A full identity rebuild spanning type, motion, and a launch film for a Series B climate platform.',
  },
  {
    slug: 'apex-launch',
    client: 'Apex',
    title: 'Product Launch',
    year: '2025',
    tags: ['Web', '3D'],
    image: '/images/projects/p2.jpg',
    summary:
      'Immersive launch site with a real-time product configurator and scroll-driven storytelling.',
  },
  {
    slug: 'atelier-campaign',
    client: 'Atelier',
    title: 'Campaign Site',
    year: '2024',
    tags: ['Experience', 'Web'],
    image: '/images/projects/p3.jpg',
    summary:
      'Seasonal campaign microsite with editorial layouts and generative visual systems.',
  },
  {
    slug: 'helix-platform',
    client: 'Helix',
    title: 'Platform UI',
    year: '2024',
    tags: ['Product', 'Design'],
    image: '/images/projects/p4.jpg',
    summary:
      'Design system and core product surfaces for a developer infrastructure console.',
  },
  {
    slug: 'orbit-experience',
    client: 'Orbit',
    title: 'Visitor Experience',
    year: '2024',
    tags: ['Experience', 'Physical'],
    image: '/images/projects/p5.jpg',
    summary:
      'Interactive installation and companion web layer for a flagship showroom.',
  },
  {
    slug: 'lumen-film',
    client: 'Lumen',
    title: 'Brand Film',
    year: '2023',
    tags: ['Motion', 'Film'],
    image: '/images/projects/p6.jpg',
    summary:
      'Thirty-second brand film and stills kit for a global lighting manufacturer.',
  },
  {
    slug: 'cascade-commerce',
    client: 'Cascade',
    title: 'Commerce Rebuild',
    year: '2025',
    tags: ['Web', 'Commerce'],
    image: '/images/projects/p7.jpg',
    summary:
      'Headless storefront with editorial merchandising and high-performance media.',
  },
  {
    slug: 'prism-event',
    client: 'Prism',
    title: 'Event Identity',
    year: '2023',
    tags: ['Event', 'Brand'],
    image: '/images/projects/p8.jpg',
    summary:
      'Identity, wayfinding, and digital program for a three-day design festival.',
  },
  {
    slug: 'nova-ai',
    client: 'Nova',
    title: 'AI Compass',
    year: '2025',
    tags: ['Product', '3D'],
    image: '/images/projects/p9.jpg',
    summary:
      'Explainer experience translating a complex AI workflow into a spatial narrative.',
  },
  {
    slug: 'ridge-outdoor',
    client: 'Ridge',
    title: 'Outdoor Capsule',
    year: '2024',
    tags: ['Brand', 'Web'],
    image: '/images/projects/p10.jpg',
    summary:
      'Capsule collection site with rugged photography direction and modular type.',
  },
  {
    slug: 'signal-audio',
    client: 'Signal',
    title: 'Audio System',
    year: '2023',
    tags: ['Web', 'Motion'],
    image: '/images/projects/p11.jpg',
    summary:
      'Product story with reactive audio visualizers and precision art direction.',
  },
  {
    slug: 'folio-archive',
    client: 'Folio',
    title: 'Archive Grid',
    year: '2022',
    tags: ['Web', 'Experience'],
    image: '/images/projects/p12.jpg',
    summary:
      'Searchable archive of twenty years of studio work with cinematic transitions.',
  },
  {
    slug: 'ember-studio',
    client: 'Ember',
    title: 'Studio Site',
    year: '2024',
    tags: ['Web', 'Brand'],
    image: '/images/projects/p13.jpg',
    summary:
      'Quiet, type-led studio presence with case-study storytelling and booking flow.',
  },
  {
    slug: 'vector-tools',
    client: 'Vector',
    title: 'Tooling Suite',
    year: '2025',
    tags: ['Product', 'Design'],
    image: '/images/projects/p14.jpg',
    summary:
      'Interface language for a creative tooling suite used by distributed teams.',
  },
  {
    slug: 'harbor-finance',
    client: 'Harbor',
    title: 'Fintech Brand',
    year: '2023',
    tags: ['Brand', 'Motion'],
    image: '/images/projects/p15.jpg',
    summary:
      'Brand system and motion guidelines for a regulated consumer finance product.',
  },
  {
    slug: 'kiln-ceramics',
    client: 'Kiln',
    title: 'Lookbook',
    year: '2022',
    tags: ['Web', 'Editorial'],
    image: '/images/projects/p16.jpg',
    summary:
      'Scroll-driven lookbook pairing craft photography with restrained typography.',
  },
  {
    slug: 'pulse-health',
    client: 'Pulse',
    title: 'Health App',
    year: '2024',
    tags: ['Product', 'Motion'],
    image: '/images/projects/p17.jpg',
    summary:
      'Mobile product design and micro-interactions for a preventive health platform.',
  },
  {
    slug: 'drift-travel',
    client: 'Drift',
    title: 'Travel Guide',
    year: '2023',
    tags: ['Experience', 'Web'],
    image: '/images/projects/p18.jpg',
    summary:
      'City guide experience with map-led navigation and editorial photography.',
  },
  {
    slug: 'mono-type',
    client: 'Mono',
    title: 'Type Specimen',
    year: '2025',
    tags: ['Type', 'Web'],
    image: '/images/projects/p19.jpg',
    summary:
      'Interactive specimen site for a variable sans family with live axis controls.',
  },
  {
    slug: 'quartz-lab',
    client: 'Quartz',
    title: 'Lab Site',
    year: '2022',
    tags: ['Web', '3D'],
    image: '/images/projects/p20.jpg',
    summary:
      'R&D lab presence with WebGL material studies and publication archive.',
  },
] as const;

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
