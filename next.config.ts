import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hips.hearstapps.com",
        pathname: "/hmg-prod/images/**",
      },
      {
        protocol: "https",
        hostname: "tse4.mm.bing.net",
        pathname: "/th**",
      },
      {
        protocol: "https",
        hostname: "www.lipmanfamilyfarms.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "tse1.mm.bing.net",
        pathname: "/th**",
      },
      {
        protocol: "https",
        hostname: "tse2.mm.bing.net",
        pathname: "/th**",
      },
    ],
  },
};

export default nextConfig;
