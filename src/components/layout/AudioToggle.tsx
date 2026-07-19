'use client';

import { useSiteAudio } from '@/providers/AudioProvider';

/**
 * Navbar mute / unmute control for the ambient bed.
 */
export function AudioToggle() {
  const { muted, toggleMute } = useSiteAudio();

  return (
    <button
      type="button"
      onClick={toggleMute}
      aria-label={muted ? 'Unmute ambient sound' : 'Mute ambient sound'}
      aria-pressed={!muted}
      title={muted ? 'Sound on' : 'Mute'}
      className="flex size-10 items-center justify-center rounded-full bg-ink-700 text-ink-200 transition-colors duration-300 hover:text-paper"
    >
      {muted ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M11 5 6 9H3v6h3l5 4V5z" />
          <path d="m23 9-6 6" />
          <path d="m17 9 6 6" />
        </svg>
      ) : (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M11 5 6 9H3v6h3l5 4V5z" />
          <path d="M15.5 8.5a5 5 0 0 1 0 7" />
          <path d="M18 5.5a9 9 0 0 1 0 13" />
        </svg>
      )}
    </button>
  );
}
