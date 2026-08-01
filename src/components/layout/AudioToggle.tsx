'use client';

import { useSiteAudio } from '@/providers/AudioProvider';

/**
 * Ambient mute control. Icon follows real audibility when preference is on
 * but the browser hasn't unlocked playback yet — so it never lies.
 */
export function AudioToggle() {
  const { muted, audible, toggleMute } = useSiteAudio();
  // Preference defaults to ON — show the speaker as on unless the user muted.
  // First click while silent unlocks playback (browser autoplay rules).
  const showMuted = muted;

  return (
    <button
      type="button"
      onClick={toggleMute}
      aria-label={
        showMuted
          ? 'Turn ambient sound on'
          : audible
            ? 'Mute ambient sound'
            : 'Enable ambient sound'
      }
      aria-pressed={!showMuted}
      title={showMuted ? 'Sound on' : audible ? 'Mute' : 'Sound on'}
      className="flex size-11 items-center justify-center rounded-full bg-ink-700 text-ink-200 transition-colors duration-300 hover:text-paper md:size-10"
    >
      {showMuted ? (
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
