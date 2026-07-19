import Link from 'next/link';

import { HeroAtmosphere } from '@/components/hero/HeroAtmosphere';
import { FEATURED_NOTE } from '@/components/sections/notes.data';
import { NAVBAR_HEIGHT } from '@/lib/constants';

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
 * Blogs hero curtain — lifts over the sticky article grid.
 */
export function BlogsHero() {
  const featured = FEATURED_NOTE;

  return (
    <section
      data-blogs-hero
      className="relative z-10 -mt-[100dvh] overflow-clip rounded-b-[2.5rem] bg-ink text-paper md:rounded-b-[3.5rem]"
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <HeroAtmosphere fluid />
      </div>

      <div
        className="relative z-10 mx-auto w-full max-w-[1200px] px-gutter pb-20 md:pb-28"
        style={{
          paddingTop: `calc(${NAVBAR_HEIGHT}px + var(--spacing-gutter) + 3.5rem)`,
        }}
      >
        <h1 className="font-display mx-auto max-w-[12ch] text-center text-[clamp(2.75rem,7vw,5.5rem)] font-normal leading-[1.02] tracking-[-0.035em]">
          Notes from
          <br />
          the studio.
        </h1>

        <article className="mt-14 md:mt-20">
          <Link
            href={`/blogs/article?slug=${encodeURIComponent(featured.slug)}`}
            className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vermilion focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
          >
            <div className="aspect-[16/9] overflow-hidden bg-ink-800 md:aspect-[2/1]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] tracking-[0.16em] uppercase md:mt-8">
              <span className="text-vermilion">Featured</span>
              <span aria-hidden="true" className="h-px w-6 bg-white/25 sm:w-10" />
              <span className="text-ink-200">{featured.category}</span>
              <span aria-hidden="true" className="h-px w-6 bg-white/25 sm:w-10" />
              <span className="text-ink-200">{featured.date}</span>
            </div>

            <h2 className="font-display mt-5 max-w-[18ch] text-[clamp(1.75rem,4.2vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] uppercase md:mt-6">
              {featured.title}
            </h2>

            <div className="mt-6 flex flex-col items-start justify-between gap-6 sm:mt-8 sm:flex-row sm:items-end">
              <p className="max-w-[36ch] text-[1.05rem] leading-relaxed text-ink-200">
                {featured.summary}
              </p>

              <span className="inline-flex shrink-0 items-center gap-2 border-b border-paper/40 pb-0.5 font-display text-[0.95rem] tracking-[0.04em] uppercase transition-colors group-hover:border-vermilion group-hover:text-vermilion">
                Read essay
                <ArrowIcon />
              </span>
            </div>
          </Link>
        </article>
      </div>
    </section>
  );
}
