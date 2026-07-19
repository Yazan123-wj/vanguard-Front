export type NoteCardData = {
  slug: string;
  category: string;
  date: string;
  title: string;
  summary: string;
  image: string;
  readTime: string;
  /** Article body paragraphs (after the lead/summary). */
  body: readonly string[];
};

export const NOTES: readonly NoteCardData[] = [
  {
    slug: 'brands-that-outlive-trends',
    category: 'Brand Strategy',
    date: 'April 18, 2026',
    title: 'Building brands that outlive trends',
    summary:
      'Why the most durable companies invest in brand as infrastructure — not decoration.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop',
    readTime: '7 min read',
    body: [
      'Trends are useful until they become a substitute for judgment. We see teams chase the look of the quarter — a typeface, a gradient, a motion language — and call the result a brand. Then the feed moves on, and so does the work.',
      'The companies that last treat brand as infrastructure: naming systems, voice, visual rules, and product patterns that survive a redesign cycle. Infrastructure is boring until you need it. Then it is the only thing that holds.',
      'When we start an engagement, we ask what must still be true in three years. Not what will photograph well next month. That question changes the brief, the deliverables, and how success gets measured.',
      'Decoration can be beautiful. Infrastructure compounds. Build for the second one.',
    ],
  },
  {
    slug: 'case-against-the-relaunch',
    category: 'Identity',
    date: 'April 02, 2026',
    title: 'The case against the relaunch',
    summary:
      "Rebrands fail quietly. Here's how we've learned to tell the real ones from the cosmetic ones.",
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&auto=format&fit=crop',
    readTime: '6 min read',
    body: [
      'A relaunch announces itself with a new logo and a press release. Six months later, the product still feels the same, support still writes the same way, and customers still describe the company with the old words. The rebrand happened on the surface. Nothing underneath moved.',
      'Real change is quieter. It shows up in how decisions get made, which work gets killed, and what the team refuses to ship. Identity is a set of constraints — not a campaign.',
      'We look for three signals before we commit to a full identity program: a shift in who the company serves, a shift in what it makes, or a shift in how it earns trust. Without one of those, a relaunch is costume.',
      'If the brief is “we need to look more premium,” pause. Ask what premium means in the product, the price, and the promise. Then design toward that — or don’t redesign at all.',
    ],
  },
  {
    slug: 'why-we-stopped-pitching',
    category: 'Studio',
    date: 'March 21, 2026',
    title: 'Why we stopped pitching',
    summary:
      "Spec work is broken. We replaced it with a paid, two-week engagement. Here's what changed.",
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
    readTime: '5 min read',
    body: [
      'Pitch culture trains studios to guess. You get a thin brief, invent a strategy in a vacuum, and hope the room likes the slides. The client gets free thinking. You get a lottery ticket.',
      'We replaced open pitches with a paid, two-week diagnostic. Same intensity, clear scope, real access to stakeholders. At the end they own the work whether they continue with us or not.',
      'The quality jumped immediately. So did the honesty. When both sides are invested, bad ideas die faster and good ones get the airtime they need.',
      'We still compete. We just refuse to compete by giving the thinking away.',
    ],
  },
  {
    slug: 'systems-over-campaigns',
    category: 'Brand Strategy',
    date: 'March 08, 2026',
    title: 'Systems over campaigns',
    summary:
      'Campaigns expire. Operating systems compound. How we brief work that still matters in two years.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop',
    readTime: '6 min read',
    body: [
      'A campaign has a launch date and an end date. A system has rules that keep producing coherent work after the agency leaves the chat.',
      'We brief for systems: templates, tone ladders, component libraries, and decision trees. The “big idea” still matters — it just has to survive contact with next quarter’s product release.',
      'Teams that only buy campaigns stay dependent. Teams that buy systems get faster without getting sloppy.',
    ],
  },
  {
    slug: 'designing-for-silence',
    category: 'Product',
    date: 'February 24, 2026',
    title: 'Designing for silence',
    summary:
      'The best interfaces feel invisible. Notes on restraint, pacing, and knowing when to stop.',
    image:
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1600&auto=format&fit=crop',
    readTime: '5 min read',
    body: [
      'Noise is easy to ship. Silence takes conviction. Every badge, tooltip, and celebratory animation asks for attention the user may not have.',
      'We design for the moment after the click — when nothing should happen except the thing the user intended. Motion earns its place by explaining, not decorating.',
      'If you can remove an element and the task still completes, remove it. Then remove one more.',
    ],
  },
  {
    slug: 'type-as-infrastructure',
    category: 'Identity',
    date: 'February 11, 2026',
    title: 'Type as infrastructure',
    summary:
      'A type system is not a font pick. It is how a brand speaks under pressure across every surface.',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1600&auto=format&fit=crop',
    readTime: '6 min read',
    body: [
      'Choosing a typeface is the smallest part of the job. The system is sizes, weights, line lengths, and the rules for when the voice gets loud or stays quiet.',
      'Under pressure — a crisis page, a dense dashboard, a three-word billboard — the type system either holds or fractures. We design for those moments first.',
      'If your brand only looks right in a hero poster, you do not have a type system. You have a mood board.',
    ],
  },
  {
    slug: 'motion-with-a-job',
    category: 'Motion',
    date: 'January 28, 2026',
    title: 'Motion with a job',
    summary:
      'Animation that explains, not entertains. The rules we use before a single keyframe is drawn.',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop',
    readTime: '5 min read',
    body: [
      'Before we animate anything, we write the job: orient, confirm, warn, or delight. If we cannot name the job, we do not draw the timeline.',
      'Entertainment motion burns trust in product UI. Explanatory motion builds it. The difference is whether the user understands more after the movement ends.',
      'Reduced-motion paths are not an afterthought. They are the primary design, with motion as progressive enhancement.',
    ],
  },
  {
    slug: 'hiring-for-taste',
    category: 'Studio',
    date: 'January 14, 2026',
    title: 'Hiring for taste',
    summary:
      'Portfolios lie. Craft shows up in the edits people refuse to ship. How we interview for that.',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop',
    readTime: '6 min read',
    body: [
      'A polished case study can hide a weak process. We ask candidates to walk us through what they cut — and why. Taste lives in the delete key.',
      'We also watch how people talk about other people’s work. Generosity without standards is fluff. Standards without generosity is ego. We hire for both.',
      'Craft is not a vibe. It is a habit of attention under deadline.',
    ],
  },
  {
    slug: 'the-brief-is-the-product',
    category: 'Process',
    date: 'January 03, 2026',
    title: 'The brief is the product',
    summary:
      'Most work fails before design starts. We treat the brief as a deliverable — not a formality.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop',
    readTime: '5 min read',
    body: [
      'A vague brief produces confident-looking work that solves the wrong problem. We would rather spend a week sharpening the question than a month polishing the wrong answer.',
      'Our briefs name the audience, the job to be done, the constraints, and the definition of done. If any of those are missing, we are not ready to design.',
      'When the brief is clear, design gets faster — and critique gets kinder, because everyone is aiming at the same target.',
    ],
  },
] as const;

/** Featured essay on /blogs hero. */
export const FEATURED_NOTE = NOTES[0]!;

/** Eight essays in the blogs curtain grid (excludes featured). */
export const BLOG_GRID_NOTES = NOTES.slice(1, 9);

export function getNoteBySlug(slug: string): NoteCardData | undefined {
  return NOTES.find((note) => note.slug === slug);
}
