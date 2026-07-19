<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forest Guardian - Gerakan Kolektif Anak Muda</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    <style>
        .hero-bg {
            background-image: linear-gradient(rgba(12, 36, 20, 0.65), rgba(12, 36, 20, 0.85)), url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1600');
            background-size: cover;
            background-position: center;
        }
    </style>
</head>
<body class="bg-stone-50 text-stone-900 font-sans scroll-smooth">

    <nav class="sticky top-0 z-50 bg-emerald-950 text-stone-100 shadow-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center gap-2">
                    <i class="fas fa-tree text-emerald-400 text-2xl"></i>
                    <span class="font-bold text-xl tracking-wider text-emerald-50">FOREST GUARDIAN</span>
                </div>
                <div class="hidden md:flex space-x-8 font-medium">
                    <a href="#hero" class="hover:text-emerald-400 transition">Home</a>
                    <a href="#profil" class="hover:text-emerald-400 transition">Profil & Visi Misi</a>
                    <a href="#artikel" class="hover:text-emerald-400 transition">Artikel</a>
                    <a href="#galeri" class="hover:text-emerald-400 transition">Galeri</a>
                    <a href="#donasi" class="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-full text-white transition shadow-sm">Donasi <i class="fas fa-heart ml-1"></i></a>
                </div>
            </div>
        </div>
    </nav>

    <header id="hero" class="hero-bg min-h-screen flex items-center justify-center text-center px-4">
        <div class="max-w-3xl text-stone-100">
            <span class="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-widest">Aksi Kolektif Pemuda</span>
            <h1 class="text-4xl md:text-6xl font-extrabold mt-6 leading-tight">Memperjuangkan Kelestarian Hutan, Lingkungan Hidup, Serta Tata Kelola Ruang Yang Berkeadilan</h1>
            <p class="text-lg md:text-xl text-stone-300 mt-6 font-light max-w-2xl mx-auto">
                Gerakan kolektif anak muda dalam memperjuangkan kelestarian hutan, lingkungan hidup, serta tata kelola ruang yang berkeadilan, transparan, dan berkelanjutan.
            </p>
            <div class="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <a href="#artikel" class="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3.5 rounded-lg shadow-lg transition duration-300">Baca Publikasi Data</a>
                <a href="#profil" class="bg-transparent hover:bg-white/10 border border-white/40 text-white font-semibold px-8 py-3.5 rounded-lg transition duration-300">Kenali Gerakan Kami</a>
            </div>
        </div>
    </header>

    <section id="profil" class="py-20 bg-stone-100">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-16">
                <h2 class="text-3xl font-bold text-emerald-950">Siapa Forest Guardian?</h2>
                <div class="w-16 h-1 bg-amber-600 mx-auto mt-4 rounded"></div>
                <p class="text-stone-600 mt-4">Kami adalah simpul bergerak anak muda yang gelisah atas ketidakadilan tata kelola ruang dan laju deforestasi yang mengancam masa depan.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-stone-200/60 flex flex-col justify-between">
                    <div>
                        <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-800 text-xl font-bold mb-6">
                            <i class="fas fa-eye"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-emerald-900 mb-4">Visi Kami</h3>
                        <p class="text-stone-600 leading-relaxed">
                            Mewujudkan gerakan kolektif anak muda yang solid, mandiri, dan berani dalam memperjuangkan kelestarian hutan, lingkungan hidup, serta tata kelola ruang yang berkeadilan (transparan) dan berkelanjutan demi generasi masa kini dan masa depan.
                        </p>
                    </div>
                </div>

                <div class="bg-white p-8 rounded-2xl shadow-sm border border-stone-200/60">
                    <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-800 text-xl font-bold mb-6">
                        <i class="fas fa-bullseye"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-emerald-900 mb-4">Misi Perjuangan</h3>
                    <ul class="space-y-4 text-stone-600">
                        <li class="flex items-start gap-3"><i class="fas fa-check text-emerald-600 mt-1"></i><span><strong>1.</strong> Upaya perlindungan hutan dan lingkungan hidup. <br><span class="text-sm italic">(Aktivitas: Riset, Monitoring, Investigasi)</span></span></li>
                        <li class="flex items-start gap-3"><i class="fas fa-check text-emerald-600 mt-1"></i><span><strong>2.</strong> Memantau dan mengawal tata kelola ruang yang berkeadilan.</span></li>
                        <li class="flex items-start gap-3"><i class="fas fa-check text-emerald-600 mt-1"></i><span><strong>3.</strong> Membangun sistem pengelolaan data berbasis riset untuk mendukung advokasi kebijakan.</span></li>
                        <li class="flex items-start gap-3"><i class="fas fa-check text-emerald-600 mt-1"></i><span><strong>4.</strong> Membangun Solidaritas dan Pendidikan Lingkungan yang Kritis dan Berkelanjutan.</span></li>
                        <li class="flex items-start gap-3"><i class="fas fa-check text-emerald-600 mt-1"></i><span><strong>5.</strong> Menjalin kolaborasi lintas sektoral untuk mendorong keadilan ekologis.</span></li>
                        <li class="flex items-start gap-3"><i class="fas fa-check text-emerald-600 mt-1"></i><span><strong>6.</strong> Mendorong Transformasi Ekonomi Restoratif Berbasis Rakyat.</span></li>
                        <li class="flex items-start gap-3"><i class="fas fa-check text-emerald-600 mt-1"></i><span><strong>7.</strong> Mendukung Perlindungan keanekaragaman hayati.</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section id="artikel" class="py-20 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <div>
                    <h2 class="text-3xl font-bold text-emerald-950">Publikasi & Kabar Hutan</h2>
                    <div class="w-16 h-1 bg-amber-600 mt-4 rounded"></div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                {% for post in site.posts limit:6 %}
                <article class="bg-stone-50 rounded-xl overflow-hidden shadow-sm border border-stone-200">
                   <img src="{{ post.thumbnail }}" alt="{{ post.title }}" class="w-full h-48 object-cover">
                   <div class="p-6">
                        <span class="text-xs font-semibold uppercase text-emerald-700">{{ post.date | date: "%d %b %Y" }}</span>
                        <h3 class="text-xl font-bold text-emerald-950 mt-2"><a href="{{ post.url }}">{{ post.title }}</a></h3>
                   </div>
                </article>
                {% endfor %}
            </div>
        </div>
    </section>

    <section id="galeri" class="py-20 bg-stone-100">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-16">
                <h2 class="text-3xl font-bold text-emerald-950">Galeri Aksi Kita</h2>
                <div class="w-16 h-1 bg-amber-600 mx-auto mt-4 rounded"></div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div class="overflow-hidden rounded-xl shadow-sm aspect-square bg-stone-300">
                    <img src="assets/images/uploads/9279.jpeg" alt="Aksi 1" class="w-full h-full object-cover hover:scale-105 transition duration-500">
                </div>
                <div class="overflow-hidden rounded-xl shadow-sm aspect-square bg-stone-300">
                    <img src="assets/images/uploads/images-1-.jpg" alt="Aksi 2" class="w-full h-full object-cover hover:scale-105 transition duration-500">
                </div>
                <div class="overflow-hidden rounded-xl shadow-sm aspect-square bg-stone-300">
                    <img src="assets/images/uploads/images-2-.jpg" alt="Aksi 3" class="w-full h-full object-cover hover:scale-105 transition duration-500">
                </div>
                <div class="overflow-hidden rounded-xl shadow-sm aspect-square bg-stone-300">
                    <img src="assets/images/uploads/images-3-.jpg" alt="Aksi 4" class="w-full h-full object-cover hover:scale-105 transition duration-500">
                </div>
                <div class="overflow-hidden rounded-xl shadow-sm aspect-square bg-stone-300">
                    <img src="assets/images/uploads/whatsapp-image-2025-02-24-at-20.16.07.webp" alt="Aksi 4" class="w-full h-full object-cover hover:scale-105 transition duration-500">
                </div>
