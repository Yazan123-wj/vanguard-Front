import Link from 'next/link';

import { ServiceCardLink } from '@/components/services/ServiceCardLink';
import { getServices } from '@/lib/api';
import { NAVBAR_HEIGHT } from '@/lib/constants';

/**
 * Full services catalog — every card in a responsive grid.
 */
export async function ServicesIndex() {
  const services = await getServices();

  return (
    <section
      className="bg-mist text-ink"
      style={{
        paddingTop: `calc(${NAVBAR_HEIGHT}px + var(--spacing-gutter) + 3.5rem)`,
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-gutter pb-24 md:pb-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-ink-400 uppercase transition-colors hover:text-ink"
        >
          <span aria-hidden="true">←</span>
          Home
        </Link>

        <p className="mt-10 font-mono text-[10px] tracking-[0.18em] text-vermilion uppercase md:mt-12">
          Services
        </p>
        <h1 className="font-display mt-4 max-w-[14ch] text-[clamp(2.25rem,5.5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
          What we take on
        </h1>
        <p className="mt-5 max-w-[40ch] text-[1.05rem] leading-relaxed text-ink-600 md:text-[1.15rem]">
          Strategy, identity, product, and launch work — built as systems your
          team can keep running after we leave.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 lg:gap-6">
          {services.map((card, index) => (
            <ServiceCardLink
              key={card.id}
              card={card}
              index={index}
              stackPad={0}
              className="relative flex h-full w-full flex-col overflow-hidden rounded-[1.5rem] bg-paper p-4 shadow-[0_18px_40px_rgb(10_10_10/0.08)] transition-[box-shadow] duration-300 hover:shadow-[0_22px_48px_rgb(10_10_10/0.12)] md:p-5"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
