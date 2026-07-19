const TRUSTED_LABEL = 'Trusted by teams behind projects for';

/** Text wordmarks — swap for real SVG logos when assets land. */
const TRUSTED_BRANDS = [
  'CHANEL',
  'Nespresso',
  'Hermès',
  'Tissot',
] as const;

export function HeroTrustedBy() {
  return (
    <div className="mt-16 flex w-full flex-col items-center md:mt-20">
      <p className="font-mono text-[10px] tracking-[0.18em] text-ink-400 uppercase md:text-[11px]">
        {TRUSTED_LABEL}
      </p>
      <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:mt-8 md:gap-x-14">
        {TRUSTED_BRANDS.map((brand) => (
          <li
            key={brand}
            className="font-display text-[15px] tracking-[0.12em] text-ink-200 uppercase md:text-[17px]"
          >
            {brand}
          </li>
        ))}
      </ul>
    </div>
  );
}
