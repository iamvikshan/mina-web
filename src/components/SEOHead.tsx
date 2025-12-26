import Head from 'next/head';
import { useRouter } from 'next/router';
import { SITE, OG } from '@/config/site';

/**
 * SEO Head Component
 * ==================
 * Provides per-page SEO meta tags including Open Graph and Twitter cards.
 * Uses the current route to build canonical URLs dynamically.
 *
 * Usage:
 * ```tsx
 * <SEOHead
 *   title="Page Title"
 *   description="Page description"
 *   image="/custom-og-image.png"
 * />
 * ```
 *
 * All props are optional and will fall back to site defaults.
 */

export interface SEOHeadProps {
  /** Page title (will be used for og:title and twitter:title) */
  title?: string;
  /** Page description (will be used for og:description and twitter:description) */
  description?: string;
  /** OG image path (relative to site URL, e.g., '/social.png') */
  image?: string;
  /** Open Graph type (defaults to 'website') */
  type?: 'website' | 'article' | 'profile';
  /** Whether to append site name to title (e.g., "Page Title | Amina") */
  appendSiteName?: boolean;
  /** Custom canonical URL (defaults to SITE.url + router.asPath) */
  canonicalUrl?: string;
  /** Whether this page should be indexed by search engines */
  noIndex?: boolean;
}

export function SEOHead({
  title,
  description,
  image,
  type = 'website',
  appendSiteName = true,
  canonicalUrl,
  noIndex = false,
}: SEOHeadProps) {
  const router = useRouter();

  // Build canonical URL from current route, stripping query params, hash fragments, and normalizing trailing slashes
  const cleanPath = router.asPath.split(/[?#]/)[0].replace(/^\/+/, '/');
  // Normalize trailing slashes: keep "/" as-is, remove trailing slash from non-root paths
  const normalizedPath =
    cleanPath === '/' ? '/' : cleanPath.replace(/\/$/, '');
  const canonical = canonicalUrl ?? `${SITE.url}${normalizedPath}`;

  // Use provided values or fall back to defaults
  const pageTitle = title ?? OG.title;
  const displayTitle = appendSiteName
    ? `${pageTitle} | ${SITE.title}`
    : pageTitle;
  const pageDescription = description ?? OG.description;

  // Build absolute image URL
  const imageUrl = image
    ? image.startsWith('http')
      ? image
      : `${SITE.url}${image}`
    : `${SITE.url}${OG.image}`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{displayTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonical} />

      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:site_name" content={SITE.title} />
      <meta property="og:locale" content={OG.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.twitterHandle} />
      <meta name="twitter:creator" content={SITE.twitterHandle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
}

export default SEOHead;
