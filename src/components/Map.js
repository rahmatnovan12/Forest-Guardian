'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconShadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

export default function Map({ reports }) {
  const position = [-0.7893, 113.9213] // Pusat (Indonesia)

  return (
    <div className="h-[500px] w-full border-4 border-earth rounded-lg overflow-hidden z-0">
      <MapContainer center={position} zoom={5} scrollWheelZoom={false} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {reports.map((report, idx) => (
          report.latitude && report.longitude && (
            <Marker key={idx} position={[report.latitude, report.longitude]} icon={icon}>
              <Popup>
                <div className="text-forest-dark">
                  <h3 className="font-bold text-sm m-0">{report.title}</h3>
                  <p className="text-xs text-earth m-0">{report.category} | {report.date}</p>
                </div>
              </Popup>
            </Marker>
          )
        ))}
      </MapContainer>
    </div>
  )
}