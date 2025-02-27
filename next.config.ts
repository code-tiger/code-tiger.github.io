import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
  output: "export",
  distDir: "out",
  reactStrictMode: true,
};

export default nextConfig;
