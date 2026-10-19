import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App.jsx";
import PublicLayout from "../layouts/PublicLayout.jsx";
import AppLayout from "../components/layout/AppLayout.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import PlaceholderPage from "../pages/PlaceholderPage.jsx";

const LoginPage = lazy(() => import("../pages/LoginPage.jsx"));
const RegisterPage = lazy(() => import("../pages/RegisterPage.jsx"));
const CitizenDashboard = lazy(() => import("../pages/citizen/CitizenDashboard.jsx"));
const MunicipalDashboard = lazy(() => import("../pages/municipal/MunicipalDashboard.jsx"));

const routes = [
  { path: "/admin/dashboard", element: <AppLayout onLogout={() => {}}><PlaceholderPage label="Dashboard (Admin)" /></AppLayout> },
  { path: "/admin/potholes", element: <AppLayout><PlaceholderPage label="Pothole Management" /></AppLayout> },
  { path: "/admin/map", element: <AppLayout><PlaceholderPage label="Map / GIS" /></AppLayout> },
  { path: "/admin/assignments", element: <AppLayout><PlaceholderPage label="Assignments" /></AppLayout> },
  { path: "/admin/repair-planning", element: <AppLayout><PlaceholderPage label="Repair Planning" /></AppLayout> },
  { path: "/admin/reports", element: <AppLayout><PlaceholderPage label="Reports and Analytics" /></AppLayout> },
  { path: "/admin/settings", element: <AppLayout><PlaceholderPage label="Settings" /></AppLayout> },
];

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="page"><div className="card">Loading...</div></div>}>
        <Routes>
          <Route path="/" element={<PublicLayout><LandingPage /></PublicLayout>} />
          <Route path="/login" element={<PublicLayout><PlaceholderPage label="Login (Citizen)" /></PublicLayout>} />
          <Route path="/register" element={<PublicLayout><PlaceholderPage label="Register (Citizen)" /></PublicLayout>} />
          <Route path="/municipal/login" element={<PublicLayout><PlaceholderPage label="Login (Municipal)" /></PublicLayout>} />
          <Route path="/municipal/register" element={<PublicLayout><PlaceholderPage label="Register (Municipal)" /></PublicLayout>} />
          <Route path="/citizen/dashboard" element={<PlaceholderPage label="Citizen Dashboard" />} />
          <Route path="/municipal/dashboard" element={<PlaceholderPage label="Municipal Dashboard" />} />
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="*" element={<PublicLayout><NotFoundPage /></PublicLayout>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
