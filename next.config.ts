/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // IMPORTANT: Allow your Strapi server images
  images: {
    domains: ["172.30.0.200", "localhost"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "172.30.0.200",
        port: "1334",
        pathname: "/uploads/**",
      },
    ],
  },

  // Prevent turbopack source map issue in prod
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
