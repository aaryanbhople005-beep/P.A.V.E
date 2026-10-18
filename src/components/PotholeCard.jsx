import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SeverityBadge, StatusBadge } from "./StatusBadge";

const MOCK_POTHOLES = [
  {
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
  },
];

export default function PotholeCard({ pothole = MOCK_POTHOLES[0] }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm text-slate-500">{pothole.pothole_id}</span>
            <SeverityBadge severity={pothole.severity} />
          </div>
          <p className="mt-1 text-sm text-slate-600">
            {pothole.ward} - {pothole.department}
          </p>
        </div>
        <StatusBadge status={pothole.status} />
      </div>
      <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
        <span>{new Date(pothole.timestamp).toLocaleString()}</span>
        {pothole.source === "AI" && <span>Confidence: {pothole.confidence}</span>}
        <Link
          to={`/admin/potholes/${pothole.pothole_id}`}
          className="flex items-center gap-1 text-blue-600 hover:underline"
        >
          Details <ArrowUpRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}