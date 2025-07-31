/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable AMP support
  experimental: {
    amp: {
      skipValidation: false
    }
  },
  
  // Configure image optimization
  images: {
    unoptimized: true,
  },
  output: 'export',
  // Add trailing slashes for better SEO
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Web vitals configuration
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

export default nextConfig;
