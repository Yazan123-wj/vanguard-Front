import { NAVBAR_HEIGHT } from '@/lib/constants';

export default function BlogArticleLoading() {
  return (
    <main
      className="min-h-dvh bg-paper"
      style={{
        paddingTop: `calc(${NAVBAR_HEIGHT}px + var(--spacing-gutter) + 2.5rem)`,
      }}
    >
      <div className="mx-auto w-full max-w-[920px] px-gutter">
        <div className="h-3 w-24 animate-pulse bg-mist" />
        <div className="mt-10 h-4 w-64 animate-pulse bg-mist" />
        <div className="mt-6 h-16 w-full max-w-md animate-pulse bg-mist" />
        <div className="mt-10 aspect-[2/1] animate-pulse bg-mist" />
      </div>
    </main>
  );
}
