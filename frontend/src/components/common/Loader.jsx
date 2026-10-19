export default function Loader({ message = "Loading..." }) {
  return (
    <div className="loader">
      <div className="spinner" aria-hidden="true" />
      <p className="muted">{message}</p>
    </div>
  );
}
