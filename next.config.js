/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const prod = process.env.NODE_ENV === 'production'

const nextConfig = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
    // disable: process.env.NODE_ENV === 'development',
    disable: !prod,
    buildExcludes: [/middleware-manifest.json$/],
    maximumFileSizeToCacheInBytes: 3000000,
  },
  images: {
    domains: ['via.placeholder.com', 'res.cloudinary.com'],
  },
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
})

module.exports = nextConfig
