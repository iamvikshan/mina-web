import { SITE } from '@/config/site';

/**
 * Get Absolute URL
 * ================
 * Returns the absolute base URL for the application.
 *
 * Priority:
 * 1. APP_URL environment variable (explicit override)
 * 2. VERCEL_URL environment variable (Vercel deployments)
 * 3. SITE.url from config (uses DOPPLER_ENVIRONMENT / NODE_ENV)
 */
export function getAbsoluteUrl(): string {
  if (process.env.APP_URL !== null && process.env.APP_URL !== undefined)
    return process.env.APP_URL;

  if (process.env.VERCEL_URL !== null && process.env.VERCEL_URL !== undefined)
    return `https://${process.env.VERCEL_URL}`;

  return SITE.url;
}
