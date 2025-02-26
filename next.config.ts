import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "npgwuhpfhhgitqrtgeca.supabase.co"
      },
    ],
  },
  
};

export default nextConfig;
