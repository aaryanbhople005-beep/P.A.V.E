import { useParams } from "react-router-dom";

export default function ComplaintDetails() {
  const { id } = useParams();

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-slate-900">Complaint Details</h1>
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-500">
          Complaint ID: {id}
        </p>
        <p className="text-sm text-slate-500">
          Details page will be built in Phase 7.
        </p>
      </div>
    </div>
  );
}
