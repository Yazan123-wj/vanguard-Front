import Link from 'next/link';

import { StackCardArt } from '@/components/sections/StackCardArt';
import type { StackCardData } from '@/components/sections/stackCards.data';
import { BackToServices } from '@/components/services/BackToServices';
import { NAVBAR_HEIGHT } from '@/lib/constants';

type ServiceDetailProps = {
  service: StackCardData;
};

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <article
      className="bg-mist text-ink"
      style={{
        paddingTop: `calc(${NAVBAR_HEIGHT}px + var(--spacing-gutter) + 3.5rem)`,
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-gutter pb-24 md:pb-32">
        <BackToServices />

        <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] tracking-[0.16em] uppercase md:mt-12">
          <span className="text-vermilion">Service</span>
          <span aria-hidden="true" className="h-px w-6 bg-ink/20 sm:w-8" />
          <span className="text-ink-400">
            {service.id.split('').join(' ')}
          </span>
        </div>

        <h1 className="font-display mt-6 max-w-[14ch] text-[clamp(2.25rem,5.5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.03em] md:mt-8">
          {service.title}
        </h1>

        <p className="mt-6 max-w-[42ch] text-[1.15rem] leading-relaxed text-ink-600 md:mt-8 md:text-[1.25rem]">
          {service.summary}
        </p>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-start md:gap-16">
          <div className="overflow-hidden rounded-[1.5rem] bg-paper p-4 shadow-[0_18px_40px_rgb(10_10_10/0.06)] md:p-5">
            <StackCardArt />
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {service.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-ink/20 px-2.5 py-1 font-mono text-[9px] tracking-[0.14em] text-ink-600 uppercase"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10 md:space-y-12">
            {service.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-[1.35rem] font-semibold tracking-[-0.02em] text-ink md:text-[1.5rem]">
                  {section.heading}
                </h2>
                <p className="mt-3 text-[1.05rem] leading-relaxed text-ink-600">
                  {section.copy}
                </p>
              </section>
            ))}

            <section>
              <h2 className="font-display text-[1.35rem] font-semibold tracking-[-0.02em] text-ink md:text-[1.5rem]">
                What you leave with
              </h2>
              <ul className="mt-4 space-y-3">
                {service.outcomes.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[1.05rem] leading-relaxed text-ink-600"
                  >
                    <span className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-vermilion" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <div className="mt-16 border-t border-ink/10 pt-10 md:mt-20">
          <p className="font-display text-[1.5rem] tracking-[-0.02em] text-ink md:text-[1.75rem]">
            Ready to start?
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-ink uppercase transition-colors hover:text-vermilion"
          >
            Talk to us
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
