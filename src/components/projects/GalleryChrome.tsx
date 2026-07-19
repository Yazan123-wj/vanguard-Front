/**
 * Light HUD over the spherical gallery.
 * Main site navbar stays mounted — no duplicate Work / Home / Contact.
 */
export function GalleryChrome() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 text-paper">
      <div className="absolute top-[5.5rem] left-1/2 hidden -translate-x-1/2 items-center gap-6 font-mono text-[10px] tracking-[0.18em] text-paper/55 uppercase md:flex">
        <span>Gallery [Live]</span>
        <span>Selected Work</span>
      </div>

      <p className="absolute bottom-6 left-6 font-mono text-[10px] tracking-[0.16em] text-paper/40 uppercase md:bottom-8 md:left-8">
        Drag to explore
      </p>
    </div>
  );
}
