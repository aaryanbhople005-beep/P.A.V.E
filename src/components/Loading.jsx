import { useEffect, useState } from "react";

export default function Loading({ message = "Loading..." }) {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setDots((d) => (d + 1) % 4), 300);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-center py-12 text-slate-500">
      <div className="flex items-center gap-2">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
        {message}
        {".".repeat(dots)}
      </div>
    </div>
  );
}