import { Link } from "react-router-dom";
import { Map as MapIcon, FilePlus, Search } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">PAVE</h1>
        <p className="text-slate-600">
          Pothole Assessment and Vision based Evaluation - reporting potholes,
          tracking repairs, and improving road safety.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Link
          to="/report"
          className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:bg-slate-50"
        >
          <FilePlus className="h-6 w-6 text-blue-600" />
          <div>
            <div className="font-medium text-slate-900">Report a Pothole</div>
            <div className="text-sm text-slate-500">Submit with photo and GPS</div>
          </div>
        </Link>
        <Link
          to="/map"
          className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:bg-slate-50"
        >
          <MapIcon className="h-6 w-6 text-blue-600" />
          <div>
            <div className="font-medium text-slate-900">View Map</div>
            <div className="text-sm text-slate-500">See potholes on the GIS map</div>
          </div>
        </Link>
        <Link
          to="/reports"
          className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:bg-slate-50"
        >
          <Search className="h-6 w-6 text-blue-600" />
          <div>
            <div className="font-medium text-slate-900">My Reports</div>
            <div className="text-sm text-slate-500">Track your submissions</div>
          </div>
        </Link>
      </div>
    </div>
  );
}