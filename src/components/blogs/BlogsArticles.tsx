import { BlogArticleCard } from '@/components/blogs/BlogArticleCard';
import { BLOG_GRID_NOTES } from '@/components/sections/notes.data';
import { NAVBAR_HEIGHT } from '@/lib/constants';

/**
 * Mist article grid curtain — lifts to reveal the sticky SiteFooter.
 * 2 columns × 4 rows.
 */
export function BlogsArticles() {
  return (
    <section
      data-blogs-articles
      className="relative z-10 -mt-[100dvh] overflow-clip rounded-b-[2.5rem] bg-mist text-ink md:rounded-b-[3.5rem]"
      style={{ paddingTop: `calc(${NAVBAR_HEIGHT}px + 4rem)` }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-gutter pb-24 md:pb-32">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 md:gap-y-16">
          {BLOG_GRID_NOTES.map((note) => (
            <BlogArticleCard key={note.slug} note={note} tone="light" />
          ))}
        </div>
      </div>
    </section>
  );
}
