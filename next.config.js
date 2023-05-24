/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "seed-mix-image.spotifycdn.com",
      "i.scdn.co",
      "t.scdn.co",
      "concerts.spotifycdn.com",
      "mosaic.scdn.co",
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
