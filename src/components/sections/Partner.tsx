import { NAVBAR_HEIGHT } from '@/lib/constants';

/**
 * Sticky copy revealed under the hero curtain, then held behind the
 * stacking cards so they slide over the same text. The inner motion
 * node exits upward with the deck after the last card.
 */
export function Partner() {
  return (
    <section
      data-partner
      className="sticky top-0 z-0 flex min-h-dvh flex-col items-center justify-center bg-mist px-gutter text-center text-ink"
      style={{ paddingTop: NAVBAR_HEIGHT }}
    >
      <div
        data-partner-motion
        className="mx-auto flex w-full max-w-[52rem] flex-col items-center will-change-transform"
      >
        <h2 className="font-display w-full text-[clamp(2.5rem,7vw,6.5rem)] font-normal leading-[0.92] tracking-[-0.035em]">
          A partner
          <br />
          <span className="whitespace-nowrap">you can count on.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-[34rem] text-pretty text-body-lg text-ink-600">
          We step in on high-stakes work where execution can&apos;t fail —
          from rebrands and campaigns to product launches.
        </p>
      </div>
    </section>
  );
}
