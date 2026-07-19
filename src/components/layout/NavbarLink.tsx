'use client';

import Link from 'next/link';
import type { MouseEventHandler } from 'react';

import { cn } from '@/lib/utils';

type NavbarLinkProps = {
  label: string;
  href: string;
  active: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function NavbarLink({ label, href, active, onClick }: NavbarLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'group relative block h-[1.25rem] overflow-hidden text-[15px] leading-[1.25rem]',
        active ? 'font-medium text-paper' : 'font-medium text-ink-200',
      )}
    >
      {/* Swap-up hover — both copies share the same line box so nothing shifts */}
      <span className="block transition-transform duration-300 ease-vanguard group-hover:-translate-y-full">
        {label}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 block translate-y-full text-paper transition-transform duration-300 ease-vanguard group-hover:translate-y-0"
      >
        {label}
      </span>
    </Link>
  );
}
