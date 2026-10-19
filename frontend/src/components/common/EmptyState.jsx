export default function EmptyState({ title = "No data", description = "Nothing to show here.", action }) {
  return (
    <div className="empty-state">
      <h3>{title}</h3>
      <p className="muted">{description}</p>
      {action && <div className="empty-state-action">{action}</div>}
    </div>
  );
}
