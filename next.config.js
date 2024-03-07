/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NEXT_PUBLIC_ENV === 'prod' ? '/experimental' : '',
  trailingSlash: true,
  output: 'export',
  images: { unoptimized: true },
  experimental: {
    scrollRestoration: true,
  },
  publicRuntimeConfig: {
    basePath: process.env.NEXT_PUBLIC_ENV === 'prod' ? '/experimental' : '',
  },
};

module.exports = nextConfig;
