import type { GalleryProject } from './data';

export function initSphericalGallery(
  root: HTMLElement,
  galleryProjects?: GalleryProject[],
): () => void;
