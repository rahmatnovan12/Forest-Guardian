import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-forest-dark text-white text-center">
      <h1 className="text-5xl font-bold mb-4 text-forest-light">Forest Guardian</h1>
      <p className="text-xl mb-8 text-earth-light max-w-2xl">
        Platform partisipatif untuk pemantauan hutan. Publikasikan laporan lapangan, deforestasi, dan keanekaragaman hayati secara terbuka.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/peta" className="px-6 py-3 bg-forest hover:bg-forest-light text-white rounded-lg font-semibold transition-colors">
          Lihat Peta Pemantauan
        </Link>
        <Link href="/admin" className="px-6 py-3 bg-earth hover:bg-earth-dark text-white rounded-lg font-semibold transition-colors">
          Login Dashboard Tim
        </Link>
      </div>
    </main>
  )
}