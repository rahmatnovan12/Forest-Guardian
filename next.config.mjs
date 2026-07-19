/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ini WAJIB agar Next.js membuat file statis
  basePath: '/Forest-Guardian', // Sesuaikan dengan nama repo Anda
  images: {
    unoptimized: true, // WAJIB: GitHub Pages tidak mendukung optimasi gambar otomatis Next.js
  },
}

export default nextConfig