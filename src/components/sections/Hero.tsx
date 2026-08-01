import { HeroAtmosphere } from '@/components/hero/HeroAtmosphere';
import { HeroHeadline } from '@/components/hero/HeroHeadline';
import { NAVBAR_HEIGHT } from '@/lib/constants';

const EYEBROW = 'BRANDING · WEB · MOTION · PRODUCT';
const HEADLINE_PREFIX =
  'Design and development partner for brands that refuse to';
const BODY =
  'Two senior teams with 15+ years of experience, collaborating with brands that refuse to blend in.';

/**
 * Curtain panel. Pulled up over the sticky Partner section with -mt-[100dvh]
 * so at rest it fully covers what's underneath. As the user scrolls, this
 * whole panel rides upward (rounded bottom edge = the curtain lip).
 */
export function Hero() {
  return (
    <section
      data-hero
      className="relative z-10 -mt-[100dvh] overflow-clip rounded-b-[2.5rem] bg-ink md:rounded-b-[3.5rem]"
    >
      <HeroAtmosphere fluid />

      <div
        className="relative z-10 flex flex-col items-center pb-24 md:pb-32"
        style={{
          // Clear fixed nav: top gutter + pill height + breathing room.
          paddingTop: `calc(${NAVBAR_HEIGHT}px + var(--spacing-gutter) + 4rem)`,
        }}
      >
        <HeroHeadline
          eyebrow={EYEBROW}
          headlinePrefix={HEADLINE_PREFIX}
          body={BODY}
        />
      </div>
    </section>
  );
}
