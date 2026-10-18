import { Link } from "react-router-dom";
import { MapPin, FilePlus, Clock, CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    title: "Report",
    description: "Submit a pothole photo or video from your phone.",
  },
  {
    title: "Locate",
    description: "Confirm where the pothole is using your current location or the map.",
  },
  {
    title: "Verify",
    description: "Your report enters the road-maintenance workflow for review.",
  },
  {
    title: "Track",
    description: "Follow progress until the pothole is resolved.",
  },
];

// Demo data only — clearly marked, not live operational data
const DEMO_STATS = {
  reportsSubmitted: "1,240",
  resolved: "890",
  averageResolutionDays: "5",
};

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-xl border border-slate-200 bg-blue-900 p-8 md:p-12 text-white">
        <div className="relative z-10 max-w-2xl">
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Better Roads. Faster Action.
          </h1>
          <p className="mb-8 text-lg text-blue-100">
            Help improve road safety by reporting potholes in your area. Share
            a photo, confirm the location, and track progress as the issue is
            addressed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/citizen/report"
              className="flex items-center justify-center gap-2 rounded bg-blue-300 px-6 py-3 text-sm font-semibold text-blue-900 hover:bg-blue-400 transition"
            >
              <FilePlus className="h-5 w-5" /> Report a Pothole
            </Link>
            <Link
              to="/citizen/complaints"
              className="flex items-center justify-center gap-2 rounded border border-blue-300 px-6 py-3 text-sm font-semibold text-blue-100 hover:bg-blue-800/20 transition"
            >
              <Clock className="h-5 w-5" /> Track My Reports
            </Link>
          </div>
        </div>
        {/* Decorative accent */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-blue-800 rounded-full blur-3xl opacity-50" />
      </section>

      {/* How PAVE Works */}
      <section>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900">How PAVE Works</h2>
            <p className="mt-2 text-sm text-slate-500">
              Citizen reporting process — distinct from automated AI detection.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => (
              <div
                key={step.title}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm flex flex-col items-center text-center"
              >
                <div className="mb-3 rounded-full bg-blue-50 p-2">
                  <span className="text-blue-600">{index + 1}</span>
                </div>
                <h3 className="mb-1 text-sm font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
            <p className="text-sm text-slate-500">
              AI-based detection uses vehicle road video processed by YOLO with
              GPS synchronization — a separate system managed by the municipal
              team. Citizen reports like yours complement it by flagging issues
              on the ground.
            </p>
          </div>
        </div>
      </section>

      {/* Why Report Potholes */}
      <section>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900">Why Report Potholes?</h2>
            <p className="mt-2 text-sm text-slate-500">
              Your report helps road-maintenance teams act faster.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                title: "Faster repairs",
                text: "Reports are routed to the maintenance team for verification and scheduling.",
              },
              {
                title: "Prioritize danger spots",
                text: "Severity and location help crews address high-risk potholes first.",
              },
              {
                title: "Track progress",
                text: "Follow your report from submission to resolution through My Complaints.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-2 text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Report Statistics (demo data) */}
      <section>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900">Recent Report Activity</h2>
            <p className="mt-2 text-xs text-slate-400 font-medium">
              Demo data — not live operational statistics
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { label: "Reports Submitted", value: DEMO_STATS.reportsSubmitted, icon: FilePlus },
              { label: "Resolved", value: DEMO_STATS.resolved, icon: CheckCircle2 },
              { label: "Avg. Resolution (days)", value: DEMO_STATS.averageResolutionDays, icon: Clock },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <stat.icon className="h-5 w-5 text-slate-400" />
                </div>
                <div className="mt-3 text-2xl font-semibold text-slate-900">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
