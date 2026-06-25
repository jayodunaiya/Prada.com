import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: "https",
        hostname: "www.prada.com",
      },
    ],
  },
}

module.exports = nextConfig



module.exports = nextConfig;
export default nextConfig;
