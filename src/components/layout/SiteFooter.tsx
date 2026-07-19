import Link from 'next/link';

import { NAVBAR_HEIGHT } from '@/lib/constants';

const OFFICES = [
  {
    city: 'Vietnam',
    address: 'Midtown, Phu My Hung, Ho Chi Minh City',
    phone: '+84 91 9922034',
  },
  {
    city: 'China',
    address: '193 Lockart Road, Hong Kong',
    phone: '+86 186 16222144',
  },
  {
    city: 'Japan',
    address: '6 Chome–6–2 Kojimachi, Tokyo',
    phone: '+81 90 59480287',
  },
  {
    city: 'France',
    address: '64–66 Rue des Archives, 75003 Paris, France',
    phone: '+33 56 3264235',
  },
] as const;

const SOCIAL = [
  { label: 'Facebook', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
] as const;

function ClockIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

/**
 * Light sticky footer revealed as the Notes curtain lifts away.
 */
export function SiteFooter() {
  return (
    <footer
      data-site-footer
      className="sticky top-0 z-0 flex min-h-dvh flex-col justify-between bg-paper px-gutter pb-16 text-ink md:pb-20"
      style={{
        paddingTop: `calc(${NAVBAR_HEIGHT}px + var(--spacing-gutter) + 8rem)`,
      }}
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-between gap-16">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-20">
          <h2 className="font-display max-w-[12ch] text-[clamp(2.75rem,7vw,5.5rem)] font-normal leading-[1.02] tracking-[-0.035em]">
            Let&apos;s create{' '}
            <em
              className="font-normal italic"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              stories
            </em>{' '}
            together
          </h2>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12">
            {OFFICES.map((office) => (
              <div key={office.city}>
                <div className="text-ink-600">
                  <ClockIcon />
                </div>
                <h3 className="font-display mt-3 text-[1.15rem] font-semibold tracking-[-0.02em]">
                  {office.city}
                </h3>
                <p className="mt-2 max-w-[28ch] text-[0.9rem] leading-relaxed text-ink-600">
                  {office.address}
                </p>
                <p className="mt-1 text-[0.9rem] text-ink-600">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10 border-t border-ink/10 pt-8 md:flex-row md:items-end md:justify-between md:gap-8">
          <div>
            <p
              className="text-[0.95rem] text-ink-600 italic"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Contact us
            </p>
            <a
              href="mailto:hello@vanguard.studio"
              className="font-display mt-2 inline-block text-[clamp(1.15rem,2.5vw,1.65rem)] font-semibold tracking-[-0.02em] underline decoration-ink/25 underline-offset-4 transition-colors hover:text-vermilion hover:decoration-vermilion"
            >
              hello@vanguard.studio
            </a>
          </div>

          <ul className="flex flex-col gap-1.5 md:min-w-[8rem]">
            {SOCIAL.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[0.95rem] text-ink transition-colors hover:text-vermilion"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="text-[0.8rem] text-ink-600 md:text-right">
            © {new Date().getFullYear()} All rights reserved. Vanguard.
          </p>
        </div>
      </div>
    </footer>
  );
}
