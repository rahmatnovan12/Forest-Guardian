/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // SANGAT PENTING: Harus sesuai dengan nama repo Anda
  basePath: '/Forest-Guardian', 
  assetPrefix: '/Forest-Guardian/',
  images: { 
    unoptimized: true 
  },
};

export default nextConfig;