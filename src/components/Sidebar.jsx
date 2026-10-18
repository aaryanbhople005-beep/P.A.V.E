import { Link, useLocation } from "react-router-dom";
import { Home, Map, FilePlus, FileText, LayoutDashboard } from "lucide-react";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/map", label: "Map", icon: Map },
  { to: "/report", label: "Report Pothole", icon: FilePlus },
  { to: "/reports", label: "My Reports", icon: FileText },
  { to: "/admin", label: "Admin Dashboard", icon: LayoutDashboard },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="hidden w-60 shrink-0 border-r border-slate-200 bg-white p-4 md:block">
      <nav className="space-y-1">
        {links.map(({ to, label, icon: Icon }) => {
          const active = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-3 rounded px-3 py-2 text-sm ${
                active
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Icon className="h-5 w-5" />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}