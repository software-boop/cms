/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // FIX: Correct image loading in Vercel + Netlify
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "172.30.0.200",
        port: "1334",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1334",
        pathname: "/uploads/**",
      },
    ],
  },

  // Avoid turbopack warnings & issues
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
