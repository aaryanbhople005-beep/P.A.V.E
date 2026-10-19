import { useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";

const PAGE_TITLES = {
  "/admin/dashboard": "Dashboard",
  "/admin/potholes": "Pothole Management",
  "/admin/potholes/:id": "Pothole Details",
  "/admin/map": "Map / GIS",
  "/admin/assignments": "Assignments",
  "/admin/repair-planning": "Repair Planning",
  "/admin/reports": "Reports and Analytics",
  "/admin/settings": "Settings",
};

export default function AppLayout({ children, onLogout }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const matchPath = Object.keys(PAGE_TITLES).find((p) =>
    location.pathname.startsWith(p.replace("/:id", ""))
  );
  const pageTitle = matchPath ? PAGE_TITLES[matchPath] : "PAVE";

  return (
    <div className="app">
      <Sidebar isOpen={sidebarOpen} onClose={setSidebarOpen} />
      <div className="app-body">
        <Header
          title={pageTitle}
          onMenuToggle={() => setSidebarOpen((o) => !o)}
          onLogout={onLogout}
        />
        <main className="main">{children}</main>
      </div>
    </div>
  );
}
