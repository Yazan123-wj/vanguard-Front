import { redirect } from 'next/navigation';

type PageProps = {
  params: Promise<{ slug: string }>;
};

/** Project detail lives in the gallery overlay — deep links return to /projects. */
export default async function ProjectPage({ params }: PageProps) {
  await params;
  redirect('/projects');
}
