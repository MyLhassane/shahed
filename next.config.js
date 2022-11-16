/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shaheed4u.click',
        port: '',
        pathname: '/wp-content/uploads/****/**/**',
      },
    ],
  },
};

module.exports = nextConfig;
