/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['127.0.0.1', 'localhost'],
  i18n: {
    locales: ['en', 'cn', 'ja'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
