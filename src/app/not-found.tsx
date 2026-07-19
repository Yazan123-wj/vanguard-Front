import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-gutter px-gutter">
      <h1 className="font-display text-heading-1">404</h1>
      <Link href="/" className="text-body text-ink-200 transition-colors hover:text-paper">
        Return home
      </Link>
    </main>
  );
}
