/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "s3.us-west-2.amazonaws.com"
    ],
  },
}

module.exports = nextConfig,
{
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.instagram.com/:path*',
      },
    ];
  },
};