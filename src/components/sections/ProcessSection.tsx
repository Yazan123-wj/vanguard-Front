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
 * Dark 2×2 process grid — sits after the projects curtain, title first.
 */
export function ProcessSection() {
  return (
    <section
      data-process
      className="relative z-10 overflow-hidden text-paper"
      style={{
        backgroundColor: '#0A0A0A',
        paddingTop: `calc(${NAVBAR_HEIGHT}px + var(--spacing-gutter))`,
        paddingBottom: '5rem',
      }}
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <HeroAtmosphere deferUntilVisible />
      </div>

      <div className="relative z-10 mx-auto max-w-[1100px] px-gutter">
        <h2 className="font-display mx-auto max-w-[18ch] text-center text-[clamp(1.85rem,4.5vw,3.25rem)] font-normal leading-[1.08] tracking-[-0.035em] text-paper">
          We don&apos;t do campaigns.
          <br />
          We build brand operating systems.
        </h2>

        <div className="mt-10 grid grid-cols-1 border-t border-l border-white/10 md:mt-12 md:grid-cols-2">
          {PROCESS_CARDS.map((card) => (
            <article
              key={card.id}
              className="flex min-h-[220px] flex-col border-r border-b border-white/10 bg-transparent p-6 md:min-h-[260px] md:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[12px] tracking-[0.22em] text-vermilion">
                  {card.id.split('').join(' ')}
                </span>
                <span className="text-ink-200">
                  <ArrowIcon />
                </span>
              </div>

              <h3 className="font-display mt-6 text-[clamp(1.35rem,2.5vw,1.85rem)] font-semibold tracking-[-0.03em] text-paper uppercase">
                {card.title}
              </h3>
              <p className="mt-3 max-w-[36ch] text-[0.95rem] leading-relaxed text-ink-200">
                {card.body}
              </p>

              <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
                {card.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-white/15 px-2.5 py-1 font-mono text-[9px] tracking-[0.14em] text-ink-200 uppercase"
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
