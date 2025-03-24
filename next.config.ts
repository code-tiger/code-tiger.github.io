import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      // e.g. https://picsum.photos/200/300
      // {
      //   protocol: "https",
      //   hostname: "picsum.photos",
      // },
    ],
  },
  output: "export",
  distDir: "out",
  reactStrictMode: true,
};

export default nextConfig;
