'use client';

import Link from 'next/link';

/**
 * Returns to the full services index.
 */
export function BackToServices() {
  return (
    <Link
      href="/services"
      className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-ink-400 uppercase transition-colors hover:text-ink"
    >
      <span aria-hidden="true">←</span>
      All services
    </Link>
  );
}
