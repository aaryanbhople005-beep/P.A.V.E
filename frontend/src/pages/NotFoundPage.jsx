export default function NotFoundPage() {
  return (
    <div className="page not-found">
      <div className="card">
        <h1>404 — Page Not Found</h1>
        <p>The requested page could not be found.</p>
        <a href="/admin/dashboard" className="button button-primary">
          Return to Dashboard
        </a>
      </div>
    </div>
  );
}
