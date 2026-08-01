import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { SiteChrome } from '@/components/layout/SiteChrome';
import { SITE } from '@/lib/constants';
import { AudioProvider } from '@/providers/AudioProvider';
import { LoaderProvider } from '@/providers/LoaderProvider';
import { MotionProvider } from '@/providers/MotionProvider';
import { SmoothScrollProvider } from '@/providers/SmoothScrollProvider';
import { fontBody, fontDisplay } from '@/styles/fonts';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontBody.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full" suppressHydrationWarning>
        <MotionProvider>
          <SmoothScrollProvider>
            <LoaderProvider>
              <AudioProvider>
                <SiteChrome />
                {children}
              </AudioProvider>
            </LoaderProvider>
          </SmoothScrollProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
