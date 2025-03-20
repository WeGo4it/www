/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove trailing slashes from paths
  trailingSlash: false,
}

module.exports = nextConfig
