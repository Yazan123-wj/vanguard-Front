import { HeroAtmosphere } from '@/components/hero/HeroAtmosphere';
import { PROCESS_CARDS } from '@/components/sections/processCards.data';
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
 * Sticky layer under the Projects CTA curtain — title + cards reveal
 * directly beneath the rising mist lip (same pattern as Partner under Hero).
 */
export function AboutReveal() {
  return (
    <section
      data-about-reveal
      className="sticky top-0 z-0 flex h-dvh flex-col justify-center overflow-hidden"
      style={{
        backgroundColor: '#0A0A0A',
        paddingTop: NAVBAR_HEIGHT,
      }}
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <HeroAtmosphere deferUntilVisible />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-gutter py-8">
        <h2 className="font-display mx-auto max-w-[18ch] text-center text-[clamp(1.6rem,3.8vw,2.75rem)] font-normal leading-[1.08] tracking-[-0.035em] text-paper">
          We don&apos;t do campaigns.
          <br />
          We build brand operating systems.
        </h2>

        <div className="mt-8 grid grid-cols-1 border-t border-l border-white/10 sm:grid-cols-2">
          {PROCESS_CARDS.map((card) => (
            <article
              key={card.id}
              className="flex flex-col border-r border-b border-white/10 p-5 md:p-7"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] tracking-[0.22em] text-vermilion">
                  {card.id.split('').join(' ')}
                </span>
                <span className="text-ink-200">
                  <ArrowIcon />
                </span>
              </div>

              <h3 className="font-display mt-5 text-[clamp(1.15rem,2vw,1.5rem)] font-semibold tracking-[-0.03em] text-paper uppercase">
                {card.title}
              </h3>
              <p className="mt-2 max-w-[34ch] text-[0.875rem] leading-relaxed text-ink-200">
                {card.body}
              </p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {card.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-white/15 px-2 py-0.5 font-mono text-[9px] tracking-[0.14em] text-ink-200 uppercase"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
