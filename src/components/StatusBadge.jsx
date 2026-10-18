const STATUS_STYLES = {
  REPORTED: "bg-slate-200 text-slate-700",
  VERIFIED: "bg-blue-100 text-blue-700",
  ASSIGNED: "bg-indigo-100 text-indigo-700",
  PLANNED: "bg-amber-100 text-amber-700",
  IN_PROGRESS: "bg-orange-100 text-orange-700",
  RESOLVED: "bg-green-100 text-green-700",
};

const SEVERITY_STYLES = {
  LOW: "bg-green-100 text-green-700",
  MEDIUM: "bg-amber-100 text-amber-700",
  HIGH: "bg-red-100 text-red-700",
  CRITICAL: "bg-purple-100 text-purple-700",
};

export function StatusBadge({ status }) {
  return (
    <span
      className={`rounded px-2 py-0.5 text-xs font-medium ${
        STATUS_STYLES[status] || "bg-slate-200 text-slate-700"
      }`}
    >
      {status}
    </span>
  );
}

export function SeverityBadge({ severity }) {
  return (
    <span
      className={`rounded px-2 py-0.5 text-xs font-medium ${
        SEVERITY_STYLES[severity] || "bg-slate-200 text-slate-700"
      }`}
    >
      {severity}
    </span>
  );
}