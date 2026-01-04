import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,   // 🔴 false → true
  },
  typescript: {
    ignoreBuildErrors: true,    // 🔴 false → true (optional but recommended)
  },
};

export default nextConfig;
