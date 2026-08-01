import { SiteFooter } from '@/components/layout/SiteFooter';
import { AboutReveal } from '@/components/sections/AboutReveal';
import { Hero } from '@/components/sections/Hero';
import { NotesSection } from '@/components/sections/NotesSection';
import { Partner } from '@/components/sections/Partner';
import { ProjectsCTA } from '@/components/sections/ProjectsCTA';
import { StackCards } from '@/components/sections/StackCards';
import { getGalleryProjects, getHomeServices } from '@/lib/api';

export default async function Home() {
  const [homeServices, galleryProjects] = await Promise.all([
    getHomeServices(),
    getGalleryProjects(),
  ]);
  const trailImages = galleryProjects
    .map((project) => project.image)
    .filter(Boolean);

  return (
    <main tabIndex={-1}>
      {/*
        One sticky Partner layer for the whole sequence:
        1) Hero curtain lifts off it
        2) Cards stack over the same text (transparent StackCards stage)
        Trailing 100dvh lets the curtain fully clear before cards begin.
        After the last card, Partner + deck exit upward, then ProjectsCTA.
      */}
      <div data-home-mist className="relative bg-mist">
        <Partner />
        <Hero />
        {/* Desktop curtain clearance — hidden on mobile (see mobile.css). */}
        <div
          aria-hidden="true"
          data-curtain-spacer
          className="pointer-events-none h-dvh"
        />
        <div id="services">
          <StackCards cards={homeServices} />
        </div>
      </div>

      {/*
        Projects CTA mist curtain over AboutReveal (title + process cards).
        Same sticky reveal as Hero → Partner.
        Mobile: flattened sequential sections (see mobile.css).
      */}
      <div
        data-home-about
        className="relative"
        style={{ backgroundColor: '#0A0A0A' }}
      >
        <AboutReveal />
        <ProjectsCTA trailImages={trailImages} />
        <div
          aria-hidden="true"
          data-curtain-spacer
          className="pointer-events-none h-dvh"
        />
      </div>

      {/*
        Notes articles curtain over the light SiteFooter.
        Mobile: flattened sequential sections (see mobile.css).
      */}
      <div data-home-footer className="relative bg-paper">
        <SiteFooter />
        <NotesSection />
        <div
          aria-hidden="true"
          data-curtain-spacer
          className="pointer-events-none h-dvh"
        />
      </div>
    </main>
  );
}
