/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
<<<<<<< HEAD
  basePath: '/Forest-Guardian',
  assetPrefix: '/Forest-Guardian/', 
  images: {
    unoptimized: true, // WAJIB untuk GitHub Pages
=======
  basePath: '/Forest-Guardian', 
  // TAMBAHKAN BARIS DI BAWAH INI:
  assetPrefix: '/Forest-Guardian/', 
  images: {
    unoptimized: true,
>>>>>>> bc1c56e24af078465ef1776a3c743e6c78289d8e
  },
}

export default nextConfig
