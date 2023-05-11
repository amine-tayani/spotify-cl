/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "i.scdn.co",
      "concerts.spotifycdn.com",
      "t.scdn.co",
      "mosaic.scdn.co",
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
