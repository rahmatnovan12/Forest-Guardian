/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Forest-Guardian', // Sesuai nama repo
  assetPrefix: '/Forest-Guardian/', // PENTING: Ini agar CSS/JS terbaca
  images: {
    unoptimized: true,
  },
}
export default nextConfig