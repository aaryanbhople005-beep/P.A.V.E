export default function Card({ children, className = "", padding = "md" }) {
  const classes = ["card", card-pad-, className].filter(Boolean).join(" ");
  return <div className={classes}>{children}</div>;
}
