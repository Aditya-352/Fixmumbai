/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/civic',
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

