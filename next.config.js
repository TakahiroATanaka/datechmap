/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NEXT_PUBLIC_ENV === 'prod' ? '/experimental' : '',
  trailingSlash: true,
  output: 'export',
};

module.exports = nextConfig;
