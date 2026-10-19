export default function PublicLayout({ children }) {
  return (
    <div className="public-layout">
      <header className="public-header">
        <div className="container header-content">
          <a href="/" className="brand-link">
            <span className="brand-mark">PAVE</span>
            <span className="brand-name">Pothole Assessment &amp; Vision-based Evaluation</span>
          </a>
          <nav className="public-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#how-it-works">How It Works</a>
            <a href="/report">Report Pothole</a>
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
          <div className="footer-brand">
            <span className="brand-mark">PAVE</span>
            <span className="footer-text">Pothole Assessment &amp; Vision-based Evaluation</span>
          </div>
          <p className="muted footer-copy">
            &copy; {new Date().getFullYear()} PAVE — Smart India Hackathon Project.
            <span className="footer-note"> Demo data only — not live municipal data.</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
