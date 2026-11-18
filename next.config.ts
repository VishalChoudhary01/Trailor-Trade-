import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats first; next/image falls back automatically.
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Tree-shake icon imports to the modules actually used.
    optimizePackageImports: ["react-icons"],
  },
};

export default nextConfig;
