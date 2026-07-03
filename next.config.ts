import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/reservations",
        destination: "/reservations.html",
      },
      {
        source: "/demo",
        destination: "/demo.html",
      },
    ];
  },
};

export default nextConfig;
