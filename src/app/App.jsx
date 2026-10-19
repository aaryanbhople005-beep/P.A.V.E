import { Outlet, useNavigate } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout.jsx";

export default function App() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/admin/dashboard");
  };

  return (
    <AppLayout onLogout={handleLogout}>
      <Outlet />
    </AppLayout>
  );
}
