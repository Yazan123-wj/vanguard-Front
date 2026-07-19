import { SiteFooter } from '@/components/layout/SiteFooter';
import { AboutReveal } from '@/components/sections/AboutReveal';
import { Hero } from '@/components/sections/Hero';
import { NotesSection } from '@/components/sections/NotesSection';
import { Partner } from '@/components/sections/Partner';
import { ProjectsCTA } from '@/components/sections/ProjectsCTA';
import { StackCards } from '@/components/sections/StackCards';

export default function Home() {
  return (
    <main tabIndex={-1}>
      {/*
        One sticky Partner layer for the whole sequence:
        1) Hero curtain lifts off it
        2) Cards stack over the same text (transparent StackCards stage)
        Trailing 100dvh lets the curtain fully clear before cards begin.
        After the last card, Partner + deck exit upward, then ProjectsCTA.
      */}
      <div className="relative bg-mist">
        <Partner />
        <Hero />
        <div aria-hidden="true" className="pointer-events-none h-dvh" />
        <StackCards />
      </div>

      {/*
        Projects CTA mist curtain over AboutReveal (title + process cards).
        Same sticky reveal as Hero → Partner.
      */}
      <div className="relative" style={{ backgroundColor: '#0A0A0A' }}>
        <AboutReveal />
        <ProjectsCTA />
        <div aria-hidden="true" className="pointer-events-none h-dvh" />
      </div>

      {/*
        Notes articles curtain over the light SiteFooter.
      */}
      <div className="relative bg-paper">
        <SiteFooter />
        <NotesSection />
        <div aria-hidden="true" className="pointer-events-none h-dvh" />
      </div>
    </main>
  );
}
