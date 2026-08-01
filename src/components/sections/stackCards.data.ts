export type StackCardData = {
  id: string;
  slug: string;
  title: string;
  body: string;
  tags: readonly string[];
  /** Longer page intro under the title. */
  summary: string;
  /** Detail sections on the service page. */
  sections: readonly {
    heading: string;
    copy: string;
  }[];
  outcomes: readonly string[];
};

export const STACK_CARDS: readonly StackCardData[] = [
  {
    id: '01',
    slug: 'brand-strategy',
    title: 'Brand Strategy',
    body: 'Positioning, narrative, and identity architecture that gives your company a defensible point of view.',
    tags: ['Research', 'Positioning', 'Naming'],
    summary:
      'We clarify what you stand for, who you serve, and why the market should care — then turn that clarity into a system your team can actually run.',
    sections: [
      {
        heading: 'What we define',
        copy: 'Category position, audience truths, competitive white space, brand narrative, naming options, and the messaging pillars that keep every launch coherent.',
      },
      {
        heading: 'How we work',
        copy: 'Workshops with founders and operators, market and competitor audits, narrative drafts, and a living strategy doc your marketing and product teams share.',
      },
    ],
    outcomes: [
      'A sharp positioning statement',
      'Narrative and messaging framework',
      'Naming and verbal identity direction',
      'Go-forward brand principles',
    ],
  },
  {
    id: '02',
    slug: 'visual-identity',
    title: 'Visual Identity',
    body: 'Logo systems, typography, and motion built to scale across every surface your brand touches.',
    tags: ['Logo', 'Type', 'Motion'],
    summary:
      'Identity that holds up in a tab icon and on a stage screen — designed as a system, not a single logo file.',
    sections: [
      {
        heading: 'What we design',
        copy: 'Logo and mark systems, type hierarchies, color logic, imagery direction, motion principles, and component rules for product and marketing.',
      },
      {
        heading: 'How we work',
        copy: 'Exploration from strategy, tight art direction rounds, production-ready files, and a lean brand guide your team can apply without us in the room.',
      },
    ],
    outcomes: [
      'Primary and alternate logo lockups',
      'Type, color, and layout system',
      'Motion and interaction language',
      'Implementation-ready assets',
    ],
  },
  {
    id: '03',
    slug: 'product-and-web',
    title: 'Product & Web',
    body: 'Marketing sites and product interfaces engineered with craft, clarity, and conversion at the core.',
    tags: ['Design', 'Build', 'Launch'],
    summary:
      'We design and ship the surfaces where your brand meets the customer — marketing sites, product UI, and the motion that makes them feel alive.',
    sections: [
      {
        heading: 'What we build',
        copy: 'Marketing sites, landing systems, product interfaces, design systems, and front-end implementation with performance and accessibility baked in.',
      },
      {
        heading: 'How we work',
        copy: 'Structure and UX first, high-fidelity design, then production engineering — one team owning the handoff so nothing gets lost between Figma and ship.',
      },
    ],
    outcomes: [
      'UX flows and information architecture',
      'High-craft UI and motion',
      'Production front-end',
      'Launch-ready QA and polish',
    ],
  },
  {
    id: '04',
    slug: 'go-to-market',
    title: 'Go-to-Market',
    body: 'Launch strategy, messaging frameworks, and campaigns that compound attention into revenue.',
    tags: ['GTM', 'Campaigns', 'Content'],
    summary:
      'Launches that sound like your brand and convert like a machine — from narrative to creative to the cadence that keeps momentum after day one.',
    sections: [
      {
        heading: 'What we plan',
        copy: 'Launch narrative, channel strategy, campaign concepts, content systems, and the measurement loop that tells you what to double down on.',
      },
      {
        heading: 'How we work',
        copy: 'Tight collaboration with your growth and product leads, creative production as needed, and a playbook you can rerun for the next release.',
      },
    ],
    outcomes: [
      'GTM narrative and messaging',
      'Campaign and content plan',
      'Launch timeline and owners',
      'Post-launch learning loop',
    ],
  },
  {
    id: '05',
    slug: 'content-systems',
    title: 'Content Systems',
    body: 'Editorial voice, content models, and production rhythms that keep the brand sounding like itself.',
    tags: ['Voice', 'Editorial', 'Cadence'],
    summary:
      'A content engine your team can run — voice, formats, and a publishing system that compounds instead of starting from zero every week.',
    sections: [
      {
        heading: 'What we build',
        copy: 'Brand voice and tone, content pillars, templates for key channels, and the editorial calendar logic that keeps output consistent.',
      },
      {
        heading: 'How we work',
        copy: 'Audit what you already publish, define the system with your marketing leads, then leave playbooks and examples your writers can extend.',
      },
    ],
    outcomes: [
      'Voice and tone guidelines',
      'Content pillar framework',
      'Channel templates',
      'Editable publishing cadence',
    ],
  },
  {
    id: '06',
    slug: 'design-systems',
    title: 'Design Systems',
    body: 'Shared UI foundations so product and marketing ship faster without drifting apart.',
    tags: ['Components', 'Tokens', 'Docs'],
    summary:
      'Tokens, components, and documentation that keep every surface coherent — from marketing pages to the product your customers live in.',
    sections: [
      {
        heading: 'What we deliver',
        copy: 'Design tokens, core components, usage rules, and a living library that engineering and design can both trust.',
      },
      {
        heading: 'How we work',
        copy: 'Inventory existing UI, define the smallest useful system, then implement and document so adoption is the default path.',
      },
    ],
    outcomes: [
      'Token and type foundations',
      'Core component library',
      'Usage documentation',
      'Handoff-ready specs',
    ],
  },
  {
    id: '07',
    slug: 'brand-audit',
    title: 'Brand Audit',
    body: 'A clear-eyed review of how your brand shows up — and where it leaks trust or attention.',
    tags: ['Audit', 'Gaps', 'Roadmap'],
    summary:
      'We map every major brand touchpoint, score what’s working, and hand you a prioritized roadmap — not a vague deck of opinions.',
    sections: [
      {
        heading: 'What we assess',
        copy: 'Identity consistency, messaging clarity, digital presence, campaign residue, and the operational habits that create drift.',
      },
      {
        heading: 'How we work',
        copy: 'Structured review across surfaces and stakeholders, then a findings workshop and a sequenced plan your team can act on.',
      },
    ],
    outcomes: [
      'Touchpoint map and scores',
      'Priority gap analysis',
      'Recommended workstreams',
      '90-day action plan',
    ],
  },
  {
    id: '08',
    slug: 'creative-direction',
    title: 'Creative Direction',
    body: 'Art direction for campaigns, films, and key moments when the brand has to look decisive.',
    tags: ['Art Direction', 'Campaigns', 'Film'],
    summary:
      'When the stakes are visible — a rebrand film, a flagship campaign, a launch moment — we set the creative bar and keep every frame on-brand.',
    sections: [
      {
        heading: 'What we lead',
        copy: 'Creative concepts, visual world-building, director and vendor briefing, and review cycles that protect the idea through production.',
      },
      {
        heading: 'How we work',
        copy: 'Tight concepting with your stakeholders, clear references and boards, then hands-on direction through finish.',
      },
    ],
    outcomes: [
      'Creative platform and boards',
      'Production brief package',
      'Directed review cycles',
      'Final asset sign-off',
    ],
  },
] as const;

/** Homepage stack shows this many services; the rest live on /services. */
export const HOME_STACK_COUNT = 4;

export function getHomeStackCards(): StackCardData[] {
  return STACK_CARDS.slice(0, HOME_STACK_COUNT) as StackCardData[];
}

export function getServiceBySlug(slug: string): StackCardData | undefined {
  return STACK_CARDS.find((card) => card.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return STACK_CARDS.map((card) => card.slug);
}
