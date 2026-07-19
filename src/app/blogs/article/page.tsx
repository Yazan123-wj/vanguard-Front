import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { BlogArticle } from '@/components/blogs/BlogArticle';
import { getNoteBySlug } from '@/components/sections/notes.data';

type Props = {
  searchParams: Promise<{ slug?: string }>;
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { slug } = await searchParams;
  const note = slug ? getNoteBySlug(slug) : undefined;
  if (!note) return { title: 'Article' };

  return {
    title: note.title,
    description: note.summary,
  };
}

export default async function BlogArticleQueryPage({ searchParams }: Props) {
  const { slug } = await searchParams;
  const note = slug ? getNoteBySlug(slug) : undefined;

  if (!note) {
    notFound();
  }

  return (
    <main tabIndex={-1} className="bg-paper">
      <BlogArticle note={note} />
    </main>
  );
}
