import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.cosmicjs.com',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
