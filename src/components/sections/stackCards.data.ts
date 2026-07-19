export type StackCardData = {
  id: string;
  title: string;
  body: string;
  tags: readonly string[];
};

export const STACK_CARDS: readonly StackCardData[] = [
  {
    id: '01',
    title: 'Brand Strategy',
    body: 'Positioning, narrative, and identity architecture that gives your company a defensible point of view.',
    tags: ['Research', 'Positioning', 'Naming'],
  },
  {
    id: '02',
    title: 'Visual Identity',
    body: 'Logo systems, typography, and motion built to scale across every surface your brand touches.',
    tags: ['Logo', 'Type', 'Motion'],
  },
  {
    id: '03',
    title: 'Product & Web',
    body: 'Marketing sites and product interfaces engineered with craft, clarity, and conversion at the core.',
    tags: ['Design', 'Build', 'Launch'],
  },
  {
    id: '04',
    title: 'Go-to-Market',
    body: 'Launch strategy, messaging frameworks, and campaigns that compound attention into revenue.',
    tags: ['GTM', 'Campaigns', 'Content'],
  },
] as const;
