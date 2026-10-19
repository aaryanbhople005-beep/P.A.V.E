import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const NAV_ITEMS = [
  { path: "/admin/dashboard", label: "Dashboard", icon: "dashboard" },
  { path: "/admin/potholes", label: "Pothole Management", icon: "report" },
  { path: "/admin/map", label: "Map / GIS", icon: "map" },
  { path: "/admin/assignments", label: "Assignments", icon: "assign" },
  { path: "/admin/repair-planning", label: "Repair Planning", icon: "build" },
  { path: "/admin/reports", label: "Reports and Analytics", icon: "bar-chart" },
  { path: "/admin/settings", label: "Settings", icon: "settings" },
];

export default function Sidebar({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(isOpen);

  const handleItemClick = (path) => {
    navigate(path);
    setOpen(false);
    if (onClose) onClose(false);
  };

  return (
    <>
      {open && (
        <div
          className="sidebar-overlay"
          onClick={() => {
            setOpen(false);
            if (onClose) onClose(false);
          }}
          aria-hidden="true"
        />
      )}
      <aside
        className={`sidebar ${open ? "sidebar-open" : "sidebar-closed"}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="sidebar-brand">
          <span className="brand-mark">PAVE</span>
          <span className="brand-name">Pothole Assessment</span>
        </div>
        <nav className="sidebar-nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.path}
              className="sidebar-item"
              onClick={() => handleItemClick(item.path)}
              aria-label={item.label}
            >
              <span className="sidebar-item-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span className="sidebar-item-label">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="sidebar-footer">
          <small className="muted">Demo build — not live data</small>
        </div>
      </aside>
    </>
  );
}
