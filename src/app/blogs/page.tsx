import type { Metadata } from 'next';

import { BlogsArticles } from '@/components/blogs/BlogsArticles';
import { BlogsHero } from '@/components/blogs/BlogsHero';
import { SiteFooter } from '@/components/layout/SiteFooter';

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Notes from the Vanguard studio.',
};

export default function BlogsPage() {
  return (
    <main tabIndex={-1}>
      {/* Dark hero curtains over mist, then articles follow immediately. */}
      <div data-blogs-top className="relative bg-mist">
        <div
          aria-hidden="true"
          data-curtain-spacer
          className="sticky top-0 z-0 min-h-dvh bg-mist"
        />
        <BlogsHero />
      </div>

      {/* Articles curtain over sticky light footer (same as Notes → Footer). */}
      <div data-blogs-footer className="relative bg-paper">
        <SiteFooter />
        <BlogsArticles />
        <div
          aria-hidden="true"
          data-curtain-spacer
          className="pointer-events-none h-dvh"
        />
      </div>
    </main>
  );
}
