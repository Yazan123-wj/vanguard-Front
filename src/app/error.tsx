'use client';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ reset }: ErrorProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-gutter px-gutter">
      <h1 className="font-display text-heading-1">Something went wrong</h1>
      <button
        type="button"
        onClick={reset}
        className="text-body text-vermilion transition-colors hover:text-vermilion-400"
      >
        Try again
      </button>
    </main>
  );
}
