/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Forest-Guardian',
  assetPrefix: '/Forest-Guardian/', 
  images: {
    unoptimized: true, // WAJIB untuk GitHub Pages
  },
}

export default nextConfig