import { Route, Routes, Navigate } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import CitizenLayout from "./components/citizen/CitizenLayout.jsx";
import AuthLayout from "./components/citizen/AuthLayout.jsx";

import Home from "./pages/citizen/Home.jsx";
import ReportPothole from "./pages/citizen/ReportPothole.jsx";
import MyComplaints from "./pages/citizen/MyComplaints.jsx";
import ComplaintDetails from "./pages/citizen/ComplaintDetails.jsx";

import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";

import ExistingHome from "./pages/Home.jsx";
import PotholeMap from "./pages/PotholeMap.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import PotholeDetails from "./pages/PotholeDetails.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<CitizenLayout />}>
        <Route path="/citizen" element={<Home />} />
        <Route path="/citizen/report" element={<ReportPothole />} />
        <Route path="/citizen/complaints" element={<MyComplaints />} />
        <Route path="/citizen/complaints/:id" element={<ComplaintDetails />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<Layout />}>
        <Route path="/" element={<ExistingHome />} />
        <Route path="/report" element={<Navigate to="/citizen/report" replace />} />
        <Route path="/reports" element={<Navigate to="/citizen/complaints" replace />} />
        <Route path="/reports/:id" element={<Navigate to="/citizen/complaints/:id" replace />} />
        <Route path="/map" element={<PotholeMap />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/potholes/:id" element={<PotholeDetails />} />
      </Route>
    </Routes>
  );
}
