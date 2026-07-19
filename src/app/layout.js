import './globals.css'

export const metadata = {
  title: 'Forest Guardian',
  description: 'Platform Publikasi Pemantauan Hutan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-stone-50 text-stone-900">{children}</body>
    </html>
  )
}