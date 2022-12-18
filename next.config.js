/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    minimumCacheTTL: 10368000,
    domains: ['assets.shopNwg.io'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    API_DICTIONARY_URL: process.env.API_DICTIONARY_URL,
    API_KEY_GIPHY: process.env.API_KEY_GIPHY,
    API_GIPHY_GIF: process.env.API_GIPHY_GIF,
    API_GIPHY_STICKER: process.env.API_GIPHY_STICKER,
    API_GIPHY_GIF_TRENDING: process.env.API_GIPHY_GIF_TRENDING,
    API_GIPHY_STICKER_TRENDING: packageJson?.API_GIPHY_STICKER_TRENDING,
  },
  webpack: (config) => {
    config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'ForkTsCheckerWebpackPlugin')

    config.watchOptions = {
      aggregateTimeout: 300,
      poll: 5000,
      ignored: ['**/.git', '**/.next', '**/node_modules'],
    }

    return config
  },
}

module.exports = nextConfig
