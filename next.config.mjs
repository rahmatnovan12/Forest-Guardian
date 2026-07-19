/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Forest-Guardian', 
  // TAMBAHKAN BARIS DI BAWAH INI:
  assetPrefix: '/Forest-Guardian/', 
  images: {
    unoptimized: true,
  },
}

export default nextConfig
