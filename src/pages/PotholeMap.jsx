import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LocateFixed } from "lucide-react";
import { useState } from "react";

const DEFAULT_CENTER = [21.14582, 79.08822];
const DEFAULT_ZOOM = 13;

const MOCK_POTHOLES = [
  { pothole_id: "P00125", latitude: 21.14582, longitude: 79.08822, severity: "HIGH", status: "VERIFIED", ward: "Ward 24" },
  { pothole_id: "P00124", latitude: 21.1523, longitude: 79.0951, severity: "MEDIUM", status: "IN_PROGRESS", ward: "Ward 18" },
];

function LocationPicker({ onLocate }) {
  useMapEvents({
    click(e) {
      onLocate(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

export default function PotholeMap() {
  const [center, setCenter] = useState(DEFAULT_CENTER);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);

  const handleLocate = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => setCenter([pos.coords.latitude, pos.coords.longitude]),
      () => {}
    );
  };

  return (
    <div className="flex h-[calc(100vh-140px)] flex-col">
      <div className="mb-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-900">GIS Map</h1>
        <button
          onClick={handleLocate}
          className="flex items-center gap-2 rounded bg-white px-3 py-2 text-sm shadow hover:bg-slate-50"
        >
          <LocateFixed className="h-4 w-4" /> My location
        </button>
      </div>
      <div className="relative flex-1">
        <MapContainer
          center={center}
          zoom={zoom}
          zoomControl
          style={{ height: "100%", width: "100%" }}
          whenCreated={(m) => setZoom(m.getZoom())}
          onMoveEnd={(m) => setCenter(m.getCenter())}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationPicker onLocate={(lat, lng) => setCenter([lat, lng])} />
          {MOCK_POTHOLES.map((p) => (
            <Marker key={p.pothole_id} position={[p.latitude, p.longitude]}>
              <Popup>
                <div className="text-sm">
                  <div className="font-mono font-medium">{p.pothole_id}</div>
                  <div>{p.ward}</div>
                  <div className="mt-1">Severity: {p.severity}</div>
                  <div>Status: {p.status}</div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}