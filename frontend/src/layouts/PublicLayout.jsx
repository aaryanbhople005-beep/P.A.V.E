export default function PublicLayout({ children }) {
  return (
    <div className="public-layout">
      <header className="public-header">
        <div className="container header-content">
          <a href="/" className="brand-link">
            <span className="brand-mark">PAVE</span>
            <span className="brand-name">Pothole Assessment &amp; Vision-based Evaluation</span>
          </a>
          <nav className="public-nav">
            <a href="#about">About</a>
            <a href="#how-it-works">How it works</a>
            <a href="/login" className="nav-link">Citizen Portal</a>
            <a href="/municipal/login" className="nav-link">Municipal Portal</a>
          </nav>
        </div>
      </header>
      <main className="public-main">
        <div className="container">{children}</div>
      </main>
      <footer className="public-footer">
        <div className="container footer-content">
          <p className="muted">&copy; {new Date().getFullYear()} PAVE — Smart India Hackathon</p>
        </div>
      </footer>
    </div>
  );
}
