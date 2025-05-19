import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    unoptimized: false
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true
};

export default nextConfig;
