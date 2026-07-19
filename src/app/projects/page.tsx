import type { Metadata } from 'next';

import { ProjectsExperience } from '@/components/projects/ProjectsExperience';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected work from Vanguard — spherical gallery.',
};

export default function ProjectsPage() {
  return <ProjectsExperience />;
}
