import type { Metadata } from 'next';

import { ContactForm } from '@/components/contact/ContactForm';
import { HeroAtmosphere } from '@/components/hero/HeroAtmosphere';
import { NAVBAR_HEIGHT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Vanguard.',
};

export default function ContactPage() {
  return (
    <main tabIndex={-1} className="relative min-h-dvh overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <HeroAtmosphere fluid />
      </div>

      <div
        className="relative z-10 mx-auto w-full max-w-[1200px] px-gutter pb-24 md:pb-32"
        style={{
          paddingTop: `calc(${NAVBAR_HEIGHT}px + var(--spacing-gutter) + 3.5rem)`,
        }}
      >
        <h1 className="font-display max-w-[12ch] text-[clamp(2.5rem,6vw,4.5rem)] font-normal leading-[1.05] tracking-[-0.035em]">
          Let&apos;s talk.
        </h1>
        <p className="mt-5 max-w-[36ch] text-[1.05rem] leading-relaxed text-ink-200">
          Tell us a little about the work — we&apos;ll follow up with next steps.
        </p>

        <div className="mt-14 md:mt-16">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
