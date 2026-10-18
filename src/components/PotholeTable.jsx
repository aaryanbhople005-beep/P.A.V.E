import { Link } from "react-router-dom";
import { SeverityBadge, StatusBadge } from "./StatusBadge";

const MOCK_POTHOLES = [
  { pothole_id: "P00125", severity: "HIGH", status: "VERIFIED", ward: "Ward 24" },
  { pothole_id: "P00124", severity: "MEDIUM", status: "IN_PROGRESS", ward: "Ward 18" },
  { pothole_id: "P00123", severity: "LOW", status: "RESOLVED", ward: "Ward 9" },
];

export default function PotholeTable({ potholes = MOCK_POTHOLES }) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
      <table className="min-w-full divide-y divide-slate-200 text-sm">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-4 py-3 text-left font-medium text-slate-600">ID</th>
            <th className="px-4 py-3 text-left font-medium text-slate-600">Ward</th>
            <th className="px-4 py-3 text-left font-medium text-slate-600">Severity</th>
            <th className="px-4 py-3 text-left font-medium text-slate-600">Status</th>
            <th className="px-4 py-3 text-left font-medium text-slate-600">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {potholes.map((p) => (
            <tr key={p.pothole_id} className="hover:bg-slate-50">
              <td className="px-4 py-3 font-mono text-slate-500">{p.pothole_id}</td>
              <td className="px-4 py-3 text-slate-700">{p.ward}</td>
              <td className="px-4 py-3">
                <SeverityBadge severity={p.severity} />
              </td>
              <td className="px-4 py-3">
                <StatusBadge status={p.status} />
              </td>
              <td className="px-4 py-3">
                <Link
                  to={`/admin/potholes/${p.pothole_id}`}
                  className="text-blue-600 hover:underline"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}