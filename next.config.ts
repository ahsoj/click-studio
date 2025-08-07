import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // remotePatterns: [new URL('https://images.unsplash.com/**')],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'images.unsplash.com',
      port: '',
      pathname: '/**',
    }],
  },  
};

export default nextConfig;
