import { useEffect, useState } from "react";

export default function Toast({ message, type = "info", onDismiss, duration = 5000 }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onDismiss?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onDismiss]);

  if (!show) return null;

  return (
    <div className={	oast toast-}>
      <span>{message}</span>
      <button onClick={() => { setShow(false); onDismiss?.(); }} className="toast-close" aria-label="Dismiss">&times;</button>
    </div>
  );
}
