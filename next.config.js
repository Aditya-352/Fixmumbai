/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/civic',
  images: {
    unoptimized: true,
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
