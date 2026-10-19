export function FormGroup({ label, htmlFor, children, error }) {
  return (
    <div className="form-group">
      {label && (
        <label htmlFor={htmlFor} className="form-label">
          {label}
        </label>
      )}
      {children}
      {error && <span className="form-error">{error}</span>}
    </div>
  );
}

export function Input({ error, className = "", ...props }) {
  const classes = ["form-input", error ? "has-error" : "", className].filter(Boolean).join(" ");
  return <input className={classes} {...props} />;
}

export function Select({ error, className = "", children, ...props }) {
  const classes = ["form-input", error ? "has-error" : "", className].filter(Boolean).join(" ");
  return (
    <select className={classes} {...props}>
      {children}
    </select>
  );
}

export function ErrorText({ children }) {
  return <span className="form-error">{children}</span>;
}
