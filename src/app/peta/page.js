import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import MapWrapper from '../../components/MapWrapper'

export default function PetaPage() {
  const laporanDir = path.join(process.cwd(), 'src/content/laporan')
  let reports = []
  
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
        
        <MapWrapper reports={reports} />
      </div>
    </main>
  )
}