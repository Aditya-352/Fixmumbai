/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Served at https://prisehat.healthrytix.com/pulse. Keep in sync with
  // APP_BASE_PATH in src/lib/base-path.ts.
  basePath: '/pulse',
  images: {
    unoptimized: true,
  },

  // ── Faster dev builds ───────────────────────────────────────────────────────
  // Tree-shake heavy packages so only the icons/components actually imported
  // are compiled per route — cuts per-route compile time significantly.
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'recharts',
      '@turf/turf',
    ],
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/civic',
        basePath: false,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;

