const path = require('path');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
module.exports = withPlugins([[withBundleAnalyzer]], {
  trailingSlash: true,
  reactStrictMode: true,
  experimental: { granularChunks: true },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
});
