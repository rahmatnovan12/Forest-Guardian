'use client'
import dynamic from 'next/dynamic'

// Memuat Map.js hanya di sisi klien
const DynamicMap = dynamic(() => import('./Map'), { 
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-gray-100 flex items-center justify-center">Memuat Peta...</div>
})

export default function MapWrapper(props) {
  return <DynamicMap {...props} />
}