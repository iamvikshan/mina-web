/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['127.0.0.1', 'localhost'],
  async redirects() {
    return [
      { source: '/dash', destination: '/dash', permanent: false },
      // Landing page (/) is now the entry point - no redirect needed
      // Auth is handled by landing page header login button
    ];
  },
  i18n: {
    locales: ['en', 'cn', 'ja'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
