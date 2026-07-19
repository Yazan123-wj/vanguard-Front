import { redirect } from 'next/navigation';

import { NOTES } from '@/components/sections/notes.data';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return NOTES.map((note) => ({ slug: note.slug }));
}

/** Pretty URLs redirect to the stable query route. */
export default async function BlogSlugRedirect({ params }: Props) {
  const { slug } = await params;
  redirect(`/blogs/article?slug=${encodeURIComponent(slug)}`);
}
