export default function PlaceholderPage({ label }) {
  return (
    <div className="page">
      <div className="page-header">
        <h1>{label}</h1>
        <p className="muted">Placeholder page — coming in a later phase.</p>
      </div>
      <div className="card empty-placeholder">
        <p>This page is not yet implemented.</p>
      </div>
    </div>
  );
}
