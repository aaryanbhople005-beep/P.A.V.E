import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlertCircle, CheckCircle, Loader2 } from "lucide-react";
import EvidenceUploader from "../../components/citizen/EvidenceUploader";
import LocationPicker from "../../components/citizen/LocationPicker";
import api from "../../services/api";

const MAX_DESCRIPTION_CHARS = 500;

const initialForm = {
  description: "",
  lat: "",
  lng: "",
};

export default function ReportPothole() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ ...initialForm });
  const [evidence, setEvidence] = useState(null);
  const [locationConfirmed, setLocationConfirmed] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(null);

  const validate = useCallback(() => {
    const newErrors = {};

    if (!evidence) {
      newErrors.evidence = "Please upload a photo or video of the pothole.";
    }

    if (!locationConfirmed || form.lat === "" || form.lng === "") {
      newErrors.location = "Please select and confirm a location.";
    }

    if (form.description.length > MAX_DESCRIPTION_CHARS) {
      newErrors.description = `Description must be ${MAX_DESCRIPTION_CHARS} characters or fewer.`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [evidence, form.lat, form.lng, form.description, locationConfirmed]);

  const handleEvidenceChange = (file) => {
    setEvidence(file);
    setErrors((prev) => ({ ...prev, evidence: null }));
  };

  const handleEvidenceRemove = () => {
    setEvidence(null);
    setErrors((prev) => ({ ...prev, evidence: "Please upload a photo or video of the pothole." }));
  };

  const handleLocationConfirm = (lat, lng) => {
    setForm((prev) => ({ ...prev, lat: lat.toFixed(6), lng: lng.toFixed(6) }));
    setLocationConfirmed(true);
    setErrors((prev) => ({ ...prev, location: null }));
  };

  const handleDescriptionChange = (e) => {
    setForm((prev) => ({ ...prev, description: e.target.value }));
    setErrors((prev) => ({ ...prev, description: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("evidence", evidence);
      formData.append("latitude", form.lat);
      formData.append("longitude", form.lng);
      formData.append("description", form.description);

      // Backend contract not yet confirmed — this endpoint is a placeholder.
      // Replace with the actual endpoint agreed with the backend developer.
      const response = await api.post("/api/reports", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const data = response.data;
      setSubmitted({
        id: data.pothole_id || data.report_id || data.id,
        timestamp: data.timestamp || data.created_at || new Date().toISOString(),
        latitude: data.latitude ?? form.lat,
        longitude: data.longitude ?? form.lng,
      });
    } catch (err) {
      setSubmitError(
        err.response?.data?.detail ||
        err.message ||
        "Failed to submit report. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-xl rounded-lg border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto mb-3">
          <CheckCircle className="mx-auto h-12 w-12 text-green-600" />
        </div>
        <h2 className="mb-3 text-xl font-bold text-green-900">
          Your pothole report has been submitted
        </h2>
        <dl className="text-left mt-6 space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-500">Report ID</span>
            <span className="font-mono font-semibold text-slate-900">{submitted.id}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Location</span>
            <span>
              {submitted.latitude}, {submitted.longitude}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Submitted at</span>
            <span>{new Date(submitted.timestamp).toLocaleString()}</span>
          </div>
        </dl>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            to={`/citizen/complaints/${submitted.id}`}
            className="flex items-center justify-center rounded bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
          >
            View Report
          </Link>
          <Link
            to="/citizen/complaints"
            className="flex items-center justify-center rounded border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            My Complaints
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex items-center gap-2 mb-1">
        <Link
          to="/citizen"
          className="text-sm text-slate-500 hover:text-blue-600 hover:underline"
        >
          ← Back to Home
        </Link>
      </div>
      <h1 className="mb-6 text-xl font-bold text-slate-900">Report a Pothole</h1>

      {submitError && (
        <div className="mb-6 rounded border border-red-200 bg-red-50 p-4 text-sm text-red-700 flex items-center gap-3">
          <AlertCircle className="h-5 w-5" />
          <div>{submitError}</div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">1. Evidence</h2>
          <EvidenceUploader
            onChange={handleEvidenceChange}
            onRemove={handleEvidenceRemove}
          />
          {errors.evidence && (
            <p className="mt-2 text-sm text-red-600">{errors.evidence}</p>
          )}
        </section>

        <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">2. Location</h2>
          <LocationPicker
            initialLat={form.lat ? parseFloat(form.lat) : null}
            initialLng={form.lng ? parseFloat(form.lng) : null}
            onConfirm={handleLocationConfirm}
          />
          {errors.location && (
            <p className="mt-2 text-sm text-red-600">{errors.location}</p>
          )}
        </section>

        <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold text-slate-900">3. Description (optional)</h2>
          <textarea
            value={form.description}
            onChange={handleDescriptionChange}
            rows={4}
            className="w-full rounded border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="Describe the pothole or nearby landmark..."
            maxLength={MAX_DESCRIPTION_CHARS}
          />
          <div className="mt-1 flex justify-end">
            <span className="text-xs text-slate-500">
              {form.description.length}/{MAX_DESCRIPTION_CHARS}
            </span>
          </div>
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description}</p>
          )}
        </section>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-blue-700 px-4 py-3 text-sm font-medium text-white hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Submitting…
            </>
          ) : (
            "Submit Report"
          )}
        </button>
        <p className="text-xs text-slate-500 text-center">
          Your report will be reviewed by the road-maintenance team.
        </p>
      </form>
    </div>
  );
}
