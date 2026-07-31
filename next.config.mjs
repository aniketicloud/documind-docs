import { createMDX } from "fumadocs-mdx/next"
import withPWA from "next-pwa"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // enables static export for better offline
}

const withMDX = createMDX()

const withPWAConfig = withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: false,
  swcMinify: true,
  fallbacks: {
    document: '/_offline', // optional offline page
  }
})

export default withMDX(withPWAConfig(nextConfig))
