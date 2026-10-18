import KPI from "../components/KPI";
import PotholeTable from "../components/PotholeTable";
import PotholeCard from "../components/PotholeCard";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Admin Dashboard</h1>
        <p className="text-slate-600">Overview of pothole reports and municipal workflow.</p>
      </div>

      <KPI />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="mb-3 text-lg font-semibold text-slate-900">Recent Potholes</h2>
          <div className="space-y-3">
            <PotholeCard />
            <PotholeCard />
            <PotholeCard />
          </div>
        </div>
        <div>
          <h2 className="mb-3 text-lg font-semibold text-slate-900">Pothole Table</h2>
          <PotholeTable />
        </div>
      </div>
    </div>
  );
}