import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Pencil, CheckCircle, Trash2 } from "lucide-react";
import { StatusBadge, SeverityBadge } from "../components/StatusBadge";

const PO = {
  pothole_id: "P00125",
  source: "AI",
  latitude: 21.14582,
  longitude: 79.08822,
  timestamp: "2026-09-22T18:31:20",
  confidence: 0.87,
  severity: "HIGH",
  status: "VERIFIED",
  ward: "Ward 24",
  department: "Road Maintenance",
  assignedOfficer: "Officer R. Patel",
  timeline: [
    { status: "REPORTED", date: "2026-09-22T18:31:20" },
    { status: "VERIFIED", date: "2026-09-23T09:10:00" },
  ],
};

export default function PotholeDetails() {
  const { id } = useParams();

  return (
    <div className="mx-auto max-w-4xl">
      <Link to="/admin" className="mb-4 flex items-center gap-1 text-sm text-blue-600 hover:underline">
        <ArrowLeft className="h-4 w-4" /> Back to dashboard
      </Link>

      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Pothole {id}</h1>
          <p className="text-slate-500">Source: {PO.source}</p>
        </div>
        <div className="flex gap-2">
          <SeverityBadge severity={PO.severity} />
          <StatusBadge status={PO.status} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">Details</h2>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              <div><dt className="text-slate-500">Latitude</dt><dd className="font-medium text-slate-900">{PO.latitude}</dd></div>
              <div><dt className="text-slate-500">Longitude</dt><dd className="font-medium text-slate-900">{PO.longitude}</dd></div>
              <div><dt className="text-slate-500">Timestamp</dt><dd className="font-medium text-slate-900">{new Date(PO.timestamp).toLocaleString()}</dd></div>
              {PO.source === "AI" && (
                <div><dt className="text-slate-500">Confidence</dt><dd className="font-medium text-slate-900">{PO.confidence}</dd></div>
              )}
              <div><dt className="text-slate-500">Ward</dt><dd className="font-medium text-slate-900">{PO.ward}</dd></div>
              <div><dt className="text-slate-500">Department</dt><dd className="font-medium text-slate-900">{PO.department}</dd></div>
              <div><dt className="text-slate-500">Officer</dt><dd className="font-medium text-slate-900">{PO.assignedOfficer}</dd></div>
            </dl>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">Status Timeline</h2>
            <ol className="relative space-y-4 border-l border-slate-200">
              {PO.timeline.map((t) => (
                <li key={t.status} className="ml-6">
                  <span className="absolute -left-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 ring-2 ring-white">
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-900">{t.status}</span>
                    <span className="text-xs text-slate-400">{new Date(t.date).toLocaleString()}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-lg font-semibold text-slate-900">Actions</h2>
            <div className="space-y-2">
              <button className="flex w-full items-center gap-2 rounded border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50">
                <Pencil className="h-4 w-4" /> Update status
              </button>
              <button className="flex w-full items-center gap-2 rounded border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50">
                <CheckCircle className="h-4 w-4" /> Upload repair evidence
              </button>
              <button className="flex w-full items-center gap-2 rounded border border-red-200 px-3 py-2 text-sm text-red-600 hover:bg-red-50">
                <Trash2 className="h-4 w-4" /> Delete
              </button>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-lg font-semibold text-slate-900">Evidence</h2>
            <div className="aspect-video rounded bg-slate-100" />
            <p className="mt-2 text-xs text-slate-500">No repair evidence uploaded yet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}