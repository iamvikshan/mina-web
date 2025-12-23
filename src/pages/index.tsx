import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import {
  LandingLayout,
  HeroAmina,
  GuardianArsenal,
  DeploymentSteps,
  BattleStats,
  RankShowcase,
  GuardianTestimonials,
  CTAGuardian,
} from '@/components/landing';
import { getBotStats, formatStatNumber } from '@/lib/botStats';
import { getUptimeStats } from '@/lib/uptime';
import { SITE, SEO, OG } from '@/config/site';

interface LandingPageProps {
  guildCount: number;
  memberCount: number;
  actionCount: number;
  formattedGuildCount: string;
  uptime: number;
  ping: number;
  status: 'online' | 'idle' | 'dnd' | 'invisible';
}

/**
 * Landing Page
 * ============
 * SSG with ISR (10 minute revalidation)
 */
export default function LandingPage({
  guildCount,
  memberCount,
  actionCount,
  formattedGuildCount,
  uptime,
  ping,
  status,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={OG.title} />
        <meta property="og:description" content={OG.description} />
        <meta property="og:image" content={OG.image} />
        <meta property="og:site_name" content={SITE.title} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={OG.title} />
        <meta name="twitter:description" content={OG.description} />
        <meta name="twitter:image" content={OG.image} />

        {/* Theme Color */}
        <meta name="theme-color" content="#DC143C" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>

      <LandingLayout>
        {/* Hero Section */}
        <HeroAmina formattedGuildCount={formattedGuildCount} uptime={uptime} />

        {/* Features Grid */}
        <GuardianArsenal />

        {/* 3-Step Deployment */}
        <DeploymentSteps protectedRealmsLabel={formattedGuildCount} />

        {/* Animated Stats */}
        <BattleStats
          guildCount={guildCount}
          memberCount={memberCount}
          actionCount={actionCount}
          uptime={uptime.toFixed(1)}
        />

        {/* Rank Progression */}
        <RankShowcase />

        {/* Testimonials */}
        <GuardianTestimonials
          formattedGuildCount={formattedGuildCount}
          uptime={uptime}
        />

        {/* Final CTA */}
        <CTAGuardian ping={ping} status={status} />
      </LandingLayout>
    </>
  );
}

/**
 * Static Props with ISR
 * =====================
 * Fetches bot stats and uptime at build time.
 * Revalidates every 10 minutes (600 seconds).
 */
export const getStaticProps: GetStaticProps<LandingPageProps> = async () => {
  try {
    // Fetch stats in parallel
    const [botStats, uptimeStats] = await Promise.all([
      getBotStats(),
      getUptimeStats(),
    ]);

    // Calculate action count (placeholder: guilds * 50 average actions)
    // In production, this would come from a dedicated actions collection
    const actionCount = botStats.guildCount * 50;

    return {
      props: {
        guildCount: botStats.guildCount,
        memberCount: botStats.memberCount,
        actionCount,
        formattedGuildCount: formatStatNumber(botStats.guildCount),
        uptime: uptimeStats.uptime,
        ping: botStats.ping,
        status: botStats.status,
      },
      // Revalidate every 10 minutes
      revalidate: 600,
    };
  } catch (error) {
    console.error('[landing] Failed to fetch stats:', error);

    // Return fallback data
    return {
      props: {
        guildCount: 1000,
        memberCount: 100000,
        actionCount: 50000,
        formattedGuildCount: '1K+',
        uptime: 99.9,
        ping: 50,
        status: 'online' as const,
      },
      // Retry sooner on error
      revalidate: 60,
    };
  }
};
