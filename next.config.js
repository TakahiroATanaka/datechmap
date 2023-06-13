/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: '/experimental',
  trailingSlash: true,
  output: 'export',
  async rewrites() {
    return [
      {
        source: '/_next/data/:query*',
        destination: '/experimental/_next/data/:query*',
      },
    ];
  },
};

module.exports = nextConfig;
