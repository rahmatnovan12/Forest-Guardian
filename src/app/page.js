export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-emerald-800">Forest Guardian</h1>
        <div className="space-x-6 font-medium text-stone-600">
          <a href="/Forest-Guardian/peta" className="hover:text-emerald-600">Peta</a>
          <a href="#" className="bg-emerald-700 text-white px-5 py-2 rounded-full hover:bg-emerald-800 transition">Login</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-4xl mx-auto px-6 pt-20 pb-32 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-stone-900 mb-6 leading-tight">
          Melindungi Hutan, <br />
          <span className="text-emerald-600">Menjaga Masa Depan.</span>
        </h2>
        <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto">
          Platform pemantauan deforestasi dan pelaporan berbasis data untuk menjaga kelestarian ekosistem kita secara transparan.
        </p>
        <a href="/Forest-Guardian/peta" className="inline-block bg-stone-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-stone-700 transition">
          Lihat Peta Pemantauan
        </a>
      </header>
    </main>
  )
}