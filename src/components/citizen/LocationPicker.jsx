import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin, Search, AlertCircle, Loader2 } from "lucide-react";

const DEFAULT_CENTER = [21.14582, 79.08822];
const DEFAULT_ZOOM = 13;

function MapClicker({ onClick }) {
  const map = useMap();
  useEffect(() => {
    const handler = (e) => onClick(e.latlng.lat, e.latlng.lng);
    map.on("click", handler);
    return () => map.off("click", handler);
  }, [map, onClick]);
  return null;
}

export default function LocationPicker({
  initialLat,
  initialLng,
  onConfirm,
  disabled = false,
}) {
  const [lat, setLat] = useState(initialLat || null);
  const [lng, setLng] = useState(initialLng || null);
  const [center, setCenter] = useState(
    initialLat && initialLng ? [initialLat, initialLng] : DEFAULT_CENTER
  );
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  const [geolocationError, setGeolocationError] = useState(null);
  const [locating, setLocating] = useState(false);

  useEffect(() => {
    if (initialLat && initialLng && (lat === null || lng === null)) {
      setLat(initialLat);
      setLng(initialLng);
      setCenter([initialLat, initialLng]);
    }
  }, [initialLat, initialLng, lat, lng]);

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      setGeolocationError("Geolocation is not supported by this browser.");
      return;
    }
    setGeolocationError(null);
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setLat(latitude);
        setLng(longitude);
        setCenter([latitude, longitude]);
        setLocating(false);
      },
      (err) => {
        setLocating(false);
        if (err.code === 1) {
          setGeolocationError("Location access denied. You can still select a location on the map.");
        } else if (err.code === 2) {
          setGeolocationError("Location information is unavailable.");
        } else if (err.code === 3) {
          setGeolocationError("Location request timed out.");
        } else {
          setGeolocationError(err.message || "Unable to get your location.");
        }
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  const handleMapClick = (newLat, newLng) => {
    setGeolocationError(null);
    setLat(newLat);
    setLng(newLng);
    setCenter([newLat, newLng]);
  };

  const handleConfirm = () => {
    if (lat === null || lng === null) return;
    onConfirm(lat, lng);
  };

  return (
    <div className="space-y-3">
      <label className="mb-1 block text-sm font-medium text-slate-700">
        Location
      </label>

      <div className="flex flex-col sm:flex-row gap-3 items-start">
        <button
          type="button"
          onClick={handleUseCurrentLocation}
          disabled={disabled || locating}
          className="flex items-center gap-2 rounded border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50 disabled:opacity-60"
        >
          {locating ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Locating…
            </>
          ) : (
            <>
              <MapPin className="h-4 w-4" />
              Use my current location
            </>
          )}
        </button>
      </div>

      {geolocationError && (
        <div className="rounded border border-red-200 bg-red-50 p-3 text-sm text-red-700 flex items-center gap-2">
          <AlertCircle className="h-4 w-4" />
          {geolocationError}
        </div>
      )}

      <div className="relative rounded-lg border border-slate-200 overflow-hidden">
        <div
          id="leaflet-map"
          className="w-full h-64"
          style={{ position: "relative" }}
        />
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
          {(lat !== null && lng !== null) && (
            <Marker position={[lat, lng]}>
              <Popup>
                <div className="text-sm">
                  <div className="font-medium">Selected location</div>
                  <div>Lat: {lat.toFixed(6)}</div>
                  <div>Lng: {lng.toFixed(6)}</div>
                </div>
              </Popup>
            </Marker>
          )}
          <MapClicker onClick={handleMapClick} />
        </MapContainer>
      </div>

      {(lat !== null && lng !== null) && (
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Search className="h-4 w-4 text-slate-400" />
          <span className="font-medium">Lat: {lat.toFixed(6)}</span>
          <span className="mx-1 text-slate-400">•</span>
          <span className="font-medium">Lng: {lng.toFixed(6)}</span>
        </div>
      )}

      {(lat !== null && lng !== null) && (
        <button
          type="button"
          onClick={handleConfirm}
          disabled={disabled}
          className="mt-2 rounded bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 disabled:opacity-60"
        >
          Confirm Location
        </button>
      )}
    </div>
  );
}
