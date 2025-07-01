/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Recommended headers for basic security & SEO hygiene
  async headers() {
    return [
      {
        source: "/(.*)", // Apply to all routes
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },

  // Optional: if you're using external images (e.g., from CDN or Google)
  // images: {
  //   domains: ['your-cdn.com', 'lh3.googleusercontent.com'], // example domains
  // },

  // Enable future optimizations
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
