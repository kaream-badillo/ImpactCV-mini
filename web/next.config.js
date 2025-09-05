/** @type {import('next').NextConfig} */
// Force Vercel redeploy - commit f5102b9
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['viem']
  },
  env: {
    NEXT_PUBLIC_RPC_URL: process.env.NEXT_PUBLIC_RPC_URL,
    NEXT_PUBLIC_CHAIN_ID: process.env.NEXT_PUBLIC_CHAIN_ID,
    NEXT_PUBLIC_BADGES_CONTRACT: process.env.NEXT_PUBLIC_BADGES_CONTRACT,
    NEXT_PUBLIC_EXPLORER_BASE: process.env.NEXT_PUBLIC_EXPLORER_BASE,
  }
}

module.exports = nextConfig
