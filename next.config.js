/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/opennuts-web' : '',
  assetPrefix: isProd ? '/opennuts-web/' : undefined,
}

module.exports = nextConfig
