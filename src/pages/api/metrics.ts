/**
 * API Route: /api/metrics
 * =======================
 * Returns combined bot stats from MongoDB and uptime from Instatus.
 * Used by AminaStatusCard component for real-time status display.
 */

import type { NextApiRequest, NextApiResponse } from 'next';
import { getBotStats } from '@/lib/botStats';
import { getUptimeStats } from '@/lib/uptime';

export interface MetricsResponse {
  guilds: number;
  members: number;
  uptime: number;
  ping: number;
  status: 'online' | 'idle' | 'dnd' | 'invisible';
  presence?: {
    status: 'online' | 'idle' | 'dnd' | 'invisible';
    message: string;
    type: string;
    url: string;
  };
  cached?: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MetricsResponse | { error: string }>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Fetch both in parallel
    const [botStats, uptimeStats] = await Promise.all([
      getBotStats(),
      getUptimeStats(),
    ]);

    // Set cache headers for CDN/browser caching
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=300, stale-while-revalidate=600'
    );

    return res.status(200).json({
      guilds: botStats.guildCount,
      members: botStats.memberCount,
      uptime: uptimeStats.uptime,
      ping: botStats.ping,
      status: botStats.status,
      presence: botStats.presence,
      cached: botStats.cached || uptimeStats.cached,
    });
  } catch (error) {
    console.error('[/api/metrics] Error:', error);
    return res.status(500).json({ error: 'Failed to fetch metrics' });
  }
}
