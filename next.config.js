/** @type {import('next').NextConfig} */

const withImages = require('next-images');

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
};

module.exports = withImages({
  webpack(config, options) {
    return config;
  },
});

module.exports = nextConfig;
