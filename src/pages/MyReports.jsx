import { Link } from "react-router-dom";
import { Search, Clock } from "lucide-react";

const REPORTS = [
  { id: "CMP-100234", status: "VERIFIED", date: "2026-09-24", ward: "Ward 24" },
  { id: "CMP-100231", status: "IN_PROGRESS", date: "2026-09-22", ward: "Ward 18" },
  { id: "CMP-100228", status: "RESOLVED", date: "2026-09-19", ward: "Ward 9" },
];

export default function MyReports() {
  return (
    <div>
      <h1 className="mb-4 text-xl font-bold text-slate-900">My Reports</h1>
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by complaint ID..."
            className="w-full rounded border border-slate-300 py-2 pl-9 pr-3 text-sm"
          />
        </div>
      </div>
      {REPORTS.length === 0 ? (
        <div className="rounded-lg border border-slate-200 bg-white p-8 text-center text-slate-500">
          No reports yet. <Link to="/report" className="text-blue-600 hover:underline">Submit one</Link>.
        </div>
      ) : (
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Complaint ID</th>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Ward</th>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Status</th>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Date</th>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {REPORTS.map((r) => (
                <tr key={r.id} className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-mono text-slate-500">{r.id}</td>
                  <td className="px-4 py-3 text-slate-700">{r.ward}</td>
                  <td className="px-4 py-3 text-slate-700">{r.status}</td>
                  <td className="px-4 py-3 text-slate-700">{r.date}</td>
                  <td className="px-4 py-3">
                    <Link to={`/reports/${r.id}`} className="flex items-center gap-1 text-blue-600 hover:underline">
                      <Clock className="h-4 w-4" /> Track
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}