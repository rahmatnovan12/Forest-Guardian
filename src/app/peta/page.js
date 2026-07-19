import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import dynamic from 'next/dynamic'
import Link from 'next/link'

// Kita tetap gunakan dynamic import agar Map bisa mendeteksi browser (window/document)
// Tanpa 'use client' di file ini, Server akan membaca data, lalu Client akan merender Map.
const DynamicMap = dynamic(() => import('../../components/Map'), { ssr: false })

export default function PetaPage() {
  const laporanDir = path.join(process.cwd(), 'src/content/laporan')
  let reports = []
  
  // Membaca file Markdown dari server
  if (fs.existsSync(laporanDir)) {
    const files = fs.readdirSync(laporanDir)
    reports = files.map(filename => {
      if (!filename.endsWith('.md')) return null
      const fileContent = fs.readFileSync(path.join(laporanDir, filename), 'utf-8')
      const { data } = matter(fileContent)
      return data
    }).filter(Boolean)
  }

  return (
    <main className="min-h-screen bg-stone-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
           <Link href="/" className="text-earth font-bold hover:text-earth-dark">&larr; Kembali</Link>
        </div>
        <h1 className="text-4xl font-bold text-forest-dark mb-2">Peta Pemantauan Hutan</h1>
        <p className="text-earth mb-8">Data titik koordinat dari laporan lapangan.</p>
        
        {/* Peta dimuat di sini, menerima data reports */}
        <DynamicMap reports={reports} />
      </div>
    </main>
  )
}