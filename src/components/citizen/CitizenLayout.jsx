import { Outlet } from "react-router-dom";

import Navbar from "../Navbar";

export default function CitizenLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="p-4 md:p-6">
        <Outlet />
      </main>
    </div>
  );
}
