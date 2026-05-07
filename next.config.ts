import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "api.microlink.io" },
      { protocol: "https", hostname: "**.netlify.app" },
      { protocol: "https", hostname: "**.netlify.com" },
    ],
  },
};

export default nextConfig;
