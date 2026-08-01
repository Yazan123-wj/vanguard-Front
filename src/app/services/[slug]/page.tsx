import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ServiceDetail } from '@/components/services/ServiceDetail';
import { ServicePageEnter } from '@/components/services/ServicePageEnter';
import { getServiceBySlug } from '@/lib/api';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return { title: 'Service' };

  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main tabIndex={-1} className="bg-mist">
      <ServicePageEnter>
        <ServiceDetail service={service} />
      </ServicePageEnter>
    </main>
  );
}
