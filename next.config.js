/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Served at https://prisehat.healthrytix.com/pulse. Keep in sync with
  // APP_BASE_PATH in src/lib/base-path.ts.
  basePath: '/pulse',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
