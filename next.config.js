/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/mikera.net' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mikera.net' : ''
}

module.exports = nextConfig 