import type { Metadata } from 'next';

import { ProjectsExperience } from '@/components/projects/ProjectsExperience';
import { getGalleryProjects } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected work from Vanguard — spherical gallery.',
};

export default async function ProjectsPage() {
  const projects = await getGalleryProjects();
  return <ProjectsExperience projects={projects} />;
}
