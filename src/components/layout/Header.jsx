export default function Header({ title, onMenuToggle, onLogout }) {
  return (
    <header className="header">
      <div className="header-left">
        <button
          className="button button-icon button-ghost"
          onClick={onMenuToggle}
          aria-label="Toggle navigation"
        >
          <span className="burger" aria-hidden="true"></span>
        </button>
        <span className="app-title">PAVE</span>
      </div>
      <div className="header-center">
        <span className="page-title">{title}</span>
      </div>
      <div className="header-right">
        <button
          className="button button-ghost"
          onClick={onLogout}
          aria-label="Sign out"
        >
          Sign out
        </button>
      </div>
    </header>
  );
}
