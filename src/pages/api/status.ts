/**
 * API Route: /api/status
 * ======================
 * Returns uptime statistics from Instatus.
 * Used by StatusPill component for real-time status display.
 */

import type { NextApiRequest, NextApiResponse } from 'next';
import { getUptimeStats } from '@/lib/uptime';

export interface StatusResponse {
  uptime: number;
  totalMonitors: number;
  downMonitors: number;
  cached?: boolean;
  cacheAge?: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StatusResponse | { error: string }>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const stats = await getUptimeStats();

    // Set cache headers for CDN/browser caching
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=300, stale-while-revalidate=600'
    );

    return res.status(200).json({
      uptime: stats.uptime,
      totalMonitors: stats.totalMonitors ?? 0,
      downMonitors: stats.downMonitors ?? 0,
      cached: stats.cached,
      cacheAge: stats.cacheAge,
    });
  } catch (error) {
    console.error('[/api/status] Error:', error);
    return res.status(500).json({ error: 'Failed to fetch status' });
  }
}
