import Link from 'next/link';

import type { NoteCardData } from '@/components/sections/notes.data';
import { NAVBAR_HEIGHT } from '@/lib/constants';

type BlogArticleProps = {
  note: NoteCardData;
};

/**
 * Editorial article — wide image (blogs-hero width), copy left-aligned to it.
 */
export function BlogArticle({ note }: BlogArticleProps) {
  return (
    <article
      className="bg-paper text-ink"
      style={{
        paddingTop: `calc(${NAVBAR_HEIGHT}px + var(--spacing-gutter) + 3.5rem)`,
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-gutter pb-24 md:pb-32">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-ink-400 uppercase transition-colors hover:text-ink"
        >
          <span aria-hidden="true">←</span>
          Journal
        </Link>

        <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] tracking-[0.16em] uppercase md:mt-12">
          <span className="text-vermilion">{note.category}</span>
          <span aria-hidden="true" className="h-px w-6 bg-ink/20 sm:w-8" />
          <span className="text-ink-400">{note.date}</span>
          <span aria-hidden="true" className="h-px w-6 bg-ink/20 sm:w-8" />
          <span className="text-ink-400">{note.readTime}</span>
        </div>

        <h1 className="font-display mt-6 max-w-[18ch] text-[clamp(2rem,5.5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] uppercase md:mt-8">
          {note.title}
        </h1>

        {/* Full content-width image (same as blogs hero featured). */}
        <div className="mt-10 aspect-[16/9] w-full overflow-hidden bg-mist md:mt-12 md:aspect-[2/1]">
          {note.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={note.image}
              alt=""
              className="h-full w-full object-cover"
            />
          ) : null}
        </div>

        {/* Text matches the image width. */}
        <div className="mt-12 w-full md:mt-16">
          <p className="max-w-none text-[1.2rem] font-medium leading-[1.55] tracking-[-0.01em] text-ink md:text-[1.3rem]">
            {note.summary}
          </p>

          <div className="mt-8 space-y-6 text-[1.1rem] leading-[1.7] text-ink-600 md:mt-10 md:space-y-7 md:text-[1.15rem]">
            {note.body.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-14 flex items-center justify-between gap-6 border-t border-ink/10 pt-6 font-mono text-[10px] tracking-[0.16em] text-ink-400 uppercase md:mt-16">
            <span>— Vanguard Studio</span>
            <span>{note.date}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
