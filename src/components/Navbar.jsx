import { Link, useLocation } from "react-router-dom";
import { Menu, Bell, User, LogIn, UserPlus } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const isAuthed = false;

  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded bg-blue-700" />
        <span className="text-lg font-semibold text-slate-900">PAVE</span>
      </div>
      <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
        <Link
          to="/citizen"
          className={location.pathname === "/citizen" ? "text-blue-700" : ""}
        >
          Home
        </Link>
        <Link
          to="/map"
          className={location.pathname === "/map" ? "text-blue-700" : ""}
        >
          Map
        </Link>
        <Link
          to="/citizen/report"
          className={location.pathname === "/citizen/report" ? "text-blue-700" : ""}
        >
          Report a Pothole
        </Link>
        <Link
          to="/citizen/complaints"
          className={
            location.pathname === "/citizen/complaints" ||
            location.pathname.startsWith("/citizen/complaints/")
              ? "text-blue-700"
              : ""
          }
        >
          My Complaints
        </Link>
        {isAuthed && (
          <Link
            to="/admin"
            className={location.pathname === "/admin" ? "text-blue-700" : ""}
          >
            Admin
          </Link>
        )}
      </nav>
      <div className="flex items-center gap-3">
        {!isAuthed ? (
          <>
            <Link
              to="/login"
              className="flex items-center gap-2 rounded border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
            >
              <LogIn className="h-4 w-4" /> Login
            </Link>
            <Link
              to="/register"
              className="rounded bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
            >
              <UserPlus className="h-4 w-4" /> Register
            </Link>
          </>
        ) : (
          <>
            <Bell className="h-5 w-5 text-slate-500" />
            <User className="h-5 w-5 text-slate-500" />
            <Menu className="h-5 text-slate-500 md:hidden" />
          </>
        )}
      </div>
    </header>
  );
}
