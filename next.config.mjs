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
  
  // Add trailing slashes for better SEO
  trailingSlash: true,
  
  // Add headers for security and SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
