export type ProcessCardData = {
  id: string;
  title: string;
  body: string;
  tags: readonly string[];
};

export const PROCESS_CARDS: readonly ProcessCardData[] = [
  {
    id: '01',
    title: 'Discover',
    body: 'Two weeks embedded with your leadership. Stakeholder interviews, market audits, and the brutally honest strategy doc no one has written yet.',
    tags: ['Interviews', 'Audits', 'Strategy'],
  },
  {
    id: '02',
    title: 'Define',
    body: 'Positioning, narrative, and creative territory. We align on a single point of view the whole company can defend in a sentence.',
    tags: ['Positioning', 'Narrative', 'Territory'],
  },
  {
    id: '03',
    title: 'Design',
    body: 'Identity, product, and campaign systems built in parallel. Weekly working sessions, no waterfall handoffs, no surprise reveals.',
    tags: ['Identity', 'Product', 'Campaigns'],
  },
  {
    id: '04',
    title: 'Deliver',
    body: 'Source files, playbooks, and a team trained to run it. We leave you with a system you own — not a dependency.',
    tags: ['Files', 'Playbooks', 'Training'],
  },
] as const;
