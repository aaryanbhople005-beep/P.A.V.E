import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { StatusBadge } from "../components/StatusBadge";

const TIMELINE = [
  { status: "REPORTED", date: "2026-09-22T18:31:20", done: true },
  { status: "VERIFIED", date: "2026-09-23T09:10:00", done: true },
  { status: "ASSIGNED", date: "2026-09-23T11:40:00", done: true },
  { status: "PLANNED", date: null, done: false },
  { status: "IN PROGRESS", date: null, done: false },
  { status: "RESOLVED", date: null, done: false },
];

export default function TrackReport() {
  const { id } = useParams();

  return (
    <div className="mx-auto max-w-2xl">
      <Link to="/reports" className="mb-4 flex items-center gap-1 text-sm text-blue-600 hover:underline">
        <ArrowLeft className="h-4 w-4" /> Back to reports
      </Link>
      <h1 className="mb-1 text-xl font-bold text-slate-900">Track Report</h1>
      <p className="mb-6 font-mono text-sm text-slate-500">Complaint ID: {id}</p>

      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm text-slate-500">Current status</span>
          <StatusBadge status="ASSIGNED" />
        </div>
        <ol className="relative space-y-4 border-l border-slate-200">
          {TIMELINE.map((step) => (
            <li key={step.status} className="ml-6">
              <span className="absolute -left-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-white ring-2 ring-slate-200">
                {step.done && (
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                )}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-slate-900">{step.status}</span>
                {step.date && (
                  <span className="text-xs text-slate-400">
                    {new Date(step.date).toLocaleString()}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}