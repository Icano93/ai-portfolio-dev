/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'example.com'],
  },
  // basePath: '/ai-portfolio',
  // assetPrefix: '/ai-portfolio/',
  
  output: 'export',
}

export default nextConfig