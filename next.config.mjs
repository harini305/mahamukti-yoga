/** @type {import('next').NextConfig} */
const nextConfig = {
  // Built-in image optimisation is off; pre-sized WebP derivatives live in public/images (see scripts/optimize-images.py).
  images: { unoptimized: true },

  // Let browsers keep the site's photos and logos instead of revalidating them on every visit.
  // File names are not content-hashed, so this is 30 days rather than immutable; rename a file to bust it sooner.
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' }],
      },
    ];
  },
};

export default nextConfig;
