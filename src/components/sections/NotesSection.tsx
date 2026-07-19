import Link from 'next/link';

import { HeroAtmosphere } from '@/components/hero/HeroAtmosphere';
import { NOTES } from '@/components/sections/notes.data';

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

/**
 * Studio notes curtain — dark articles panel that lifts to reveal the light footer.
 */
export function NotesSection() {
  return (
    <section
      data-notes
      className="relative z-10 -mt-[100dvh] overflow-clip rounded-b-[2.5rem] px-gutter py-24 text-paper md:rounded-b-[3.5rem] md:py-32"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <HeroAtmosphere deferUntilVisible />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="font-display max-w-[12ch] text-[clamp(2.25rem,5vw,4rem)] font-normal leading-[1.05] tracking-[-0.035em]">
            Notes from
            <br />
            the studio.
          </h2>
          <Link
            href="/blogs"
            className="group inline-flex items-center gap-2 font-display text-[1.05rem] tracking-[-0.02em] text-paper transition-colors hover:text-vermilion"
          >
            <span className="border-b border-white/25 pb-0.5 transition-colors group-hover:border-vermilion">
              See all articles
            </span>
            <span
              aria-hidden="true"
              className="translate-y-px transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <ArrowIcon />
            </span>
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
          {NOTES.slice(0, 3).map((note) => (
            <article key={note.slug} className="flex flex-col">
              <Link
                href={`/blogs/article?slug=${encodeURIComponent(note.slug)}`}
                className="group flex flex-col"
              >
                <div className="aspect-[4/5] overflow-hidden bg-ink-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={note.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-5 flex items-center gap-3 font-mono text-[10px] tracking-[0.16em] text-ink-200 uppercase">
                  <span>{note.category}</span>
                  <span aria-hidden="true" className="h-px flex-1 bg-white/15" />
                  <span>{note.date}</span>
                </div>

                <h3 className="font-display mt-4 text-[clamp(1.25rem,2vw,1.65rem)] font-semibold leading-snug tracking-[-0.025em] text-paper">
                  {note.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-200">
                  {note.summary}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 font-display text-[0.95rem] text-paper transition-colors group-hover:text-vermilion">
                  Read more
                  <ArrowIcon />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
