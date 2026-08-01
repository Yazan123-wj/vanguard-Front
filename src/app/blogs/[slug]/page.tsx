import { redirect } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

/** Pretty URLs redirect to the stable query route. */
export default async function BlogSlugRedirect({ params }: Props) {
  const { slug } = await params;
  redirect(`/blogs/article?slug=${encodeURIComponent(slug)}`);
}
