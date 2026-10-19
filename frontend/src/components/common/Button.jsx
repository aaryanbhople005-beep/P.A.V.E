export default function Button({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  className = "",
  ...props
}) {
  const Component = as;
  const classes = ["button", utton-, utton-, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
