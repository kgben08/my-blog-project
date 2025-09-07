import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["pics.photos", "cdn.sanity.io"],
  },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  /* config options here */
};

export default nextConfig;
