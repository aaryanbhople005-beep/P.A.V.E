import { useState } from "react";
import { MapPin, Upload, Image, Video } from "lucide-react";

export default function ReportPothole() {
  const [description, setDescription] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [reportId, setReportId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported by this browser");
      return;
    }
    setError("");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLat(pos.coords.latitude.toFixed(6));
        setLng(pos.coords.longitude.toFixed(6));
      },
      (err) => setError(err.message)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    // TODO: integrate with FastAPI POST /api/reports
    setTimeout(() => {
      setReportId("CMP-" + Math.floor(100000 + Math.random() * 900000));
      setLoading(false);
    }, 600);
  };

  if (reportId) {
    return (
      <div className="mx-auto max-w-xl rounded-lg border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-green-600" />
        <h2 className="mt-3 text-xl font-semibold text-green-900">
          Report Submitted
        </h2>
        <p className="mt-1 text-sm text-green-800">
          Your complaint ID is:
        </p>
        <p className="mt-2 font-mono text-2xl font-bold text-green-900">
          {reportId}
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="mb-4 text-xl font-bold text-slate-900">Report a Pothole</h1>
      {error && (
        <div className="mb-4 rounded border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Location
          </label>
          <button
            type="button"
            onClick={handleGetLocation}
            className="flex items-center gap-2 rounded border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50"
          >
            <MapPin className="h-4 w-4" /> Use current GPS location
          </button>
          {lat && lng && (
            <p className="mt-2 text-sm text-slate-600">
              Lat: {lat}, Lng: {lng}
            </p>
          )}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Description (optional)
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full rounded border border-slate-300 px-3 py-2 text-sm"
            placeholder="Describe the pothole..."
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Media
          </label>
          <div className="flex gap-3">
            <button type="button" className="flex items-center gap-2 rounded border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50">
              <Image className="h-4 w-4" /> Upload image
            </button>
            <button type="button" className="flex items-center gap-2 rounded border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50">
              <Video className="h-4 w-4" /> Upload video
            </button>
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Attachment
          </label>
          <div className="flex items-center gap-2 rounded border border-dashed border-slate-300 p-4 text-sm text-slate-500">
            <Upload className="h-5 w-5" /> Drag or click to upload photo/video
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Report"}
        </button>
      </form>
    </div>
  );
}

function CheckCircle({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}