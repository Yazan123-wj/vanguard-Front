import Link from 'next/link';

import type { NoteCardData } from '@/components/sections/notes.data';

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

type BlogArticleCardProps = {
  note: NoteCardData;
  /** Light surface under the dark hero curtain. */
  tone?: 'dark' | 'light';
};

/**
 * Essay card — same shape as the blogs hero featured block.
 */
export function BlogArticleCard({
  note,
  tone = 'light',
}: BlogArticleCardProps) {
  const isLight = tone === 'light';

  return (
    <article>
      <Link
        href={`/blogs/article?slug=${encodeURIComponent(note.slug)}`}
        className={`group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vermilion focus-visible:ring-offset-4 ${
          isLight
            ? 'focus-visible:ring-offset-mist'
            : 'focus-visible:ring-offset-ink'
        }`}
      >
        <div className="aspect-square overflow-hidden bg-ink-800">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={note.image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>

        <div
          className={`mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] tracking-[0.16em] uppercase md:mt-6 ${
            isLight ? 'text-ink-400' : 'text-ink-200'
          }`}
        >
          <span>{note.category}</span>
          <span
            aria-hidden="true"
            className={`h-px w-6 sm:w-8 ${isLight ? 'bg-ink/20' : 'bg-white/25'}`}
          />
          <span>{note.date}</span>
        </div>

        <h3
          className={`font-display mt-4 text-[clamp(1.25rem,2.4vw,1.85rem)] font-semibold leading-[1.08] tracking-[-0.03em] uppercase ${
            isLight ? 'text-ink' : 'text-paper'
          }`}
        >
          {note.title}
        </h3>

        <div className="mt-4 flex flex-col items-start justify-between gap-4 sm:mt-5 sm:flex-row sm:items-end">
          <p
            className={`max-w-[34ch] text-[0.95rem] leading-relaxed ${
              isLight ? 'text-ink-600' : 'text-ink-200'
            }`}
          >
            {note.summary}
          </p>

          <span
            className={`inline-flex shrink-0 items-center gap-2 border-b pb-0.5 font-display text-[0.85rem] tracking-[0.04em] uppercase transition-colors group-hover:border-vermilion group-hover:text-vermilion ${
              isLight
                ? 'border-ink/35 text-ink'
                : 'border-paper/40 text-paper'
            }`}
          >
            Read essay
            <ArrowIcon />
          </span>
        </div>
      </Link>
    </article>
  );
}
