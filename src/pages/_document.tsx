// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';
import { SITE, SEO } from '@/config/site';
import { ImagePaths } from '@/utils/cdn';

/**
 * Custom Document
 * ===============
 * Handles <html> and <body> tags, plus global <head> elements.
 * Only site-wide static meta tags belong here.
 *
 * Per-page SEO (og:url, og:title, og:description, og:image) should use
 * the SEOHead component in individual pages for route-aware meta tags.
 */
export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(SEO.structuredData),
          }}
        />

        {/* Basic Meta Tags */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta name="author" content={SITE.author} />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href={ImagePaths.logo.headshotEmojiSvg}
          type="image/svg+xml"
        />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* Manifest & Theme */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content={SITE.themeColor} />
        <meta name="mobile-web-app-capable" content="yes" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
