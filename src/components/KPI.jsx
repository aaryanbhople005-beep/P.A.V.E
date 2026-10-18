import { TrendingUp, AlertTriangle, Wrench, CheckCircle } from "lucide-react";

const KPIS = [
  { label: "Total Potholes", value: 128, icon: TrendingUp, color: "text-blue-600" },
  { label: "High Priority", value: 24, icon: AlertTriangle, color: "text-red-600" },
  { label: "In Progress", value: 18, icon: Wrench, color: "text-orange-600" },
  { label: "Resolved", value: 42, icon: CheckCircle, color: "text-green-600" },
];

export default function KPI() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {KPIS.map((kpi) => {
        const Icon = kpi.icon;
        return (
          <div
            key={kpi.label}
            className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">{kpi.label}</span>
              <Icon className={`h-5 w-5 ${kpi.color}`} />
            </div>
            <div className="mt-2 text-3xl font-semibold text-slate-900">
              {kpi.value}
            </div>
          </div>
        );
      })}
    </div>
  );
}