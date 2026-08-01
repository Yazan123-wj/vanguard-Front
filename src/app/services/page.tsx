import type { Metadata } from 'next';

import { ServicesIndex } from '@/components/services/ServicesIndex';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Brand strategy, visual identity, product & web, go-to-market, and more from Vanguard.',
};

export default function ServicesPage() {
  return (
    <main tabIndex={-1} className="min-h-dvh bg-mist">
      <ServicesIndex />
    </main>
  );
}
