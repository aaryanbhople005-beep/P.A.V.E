import { Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import PlaceholderPage from "../pages/PlaceholderPage.jsx";

const routes = [
  { path: "/admin/dashboard", element: <DashboardPage /> },
  { path: "/admin/potholes", element: <PlaceholderPage label="Pothole Management" /> },
  { path: "/admin/potholes/:id", element: <PlaceholderPage label="Pothole Details" /> },
  { path: "/admin/map", element: <PlaceholderPage label="Map / GIS" /> },
  { path: "/admin/assignments", element: <PlaceholderPage label="Assignments" /> },
  { path: "/admin/repair-planning", element: <PlaceholderPage label="Repair Planning" /> },
  { path: "/admin/reports", element: <PlaceholderPage label="Reports and Analytics" /> },
  { path: "/admin/settings", element: <PlaceholderPage label="Settings" /> },
];

export default function Router() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
