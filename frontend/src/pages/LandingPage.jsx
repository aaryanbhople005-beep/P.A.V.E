export default function LandingPage() {
  return (
    <div className="landing-page">
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>PAVE</h1>
            <h2>Pothole Assessment &amp; Vision-based Evaluation</h2>
            <p className="lead muted">
              A smart platform to detect, report, and manage potholes for safer roads.
            </p>
            <div className="hero-actions">
              <a href="/report" className="button button-primary button-lg">
                Report a Pothole
              </a>
              <a href="#how-it-works" className="button button-outline button-lg">
                How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <h2>About PAVE</h2>
          <p className="muted">
            PAVE helps citizens report road damage and enables municipal authorities to
            prioritize, assign, and resolve pothole complaints efficiently.
          </p>
        </div>
      </section>

      <section id="how-it-works" className="how-section">
        <div className="container">
          <h2>How It Works</h2>
          <div className="grid-3">
            <div className="card">
              <h3>1. Detect</h3>
              <p className="muted">AI-assisted detection or manual reporting.</p>
            </div>
            <div className="card">
              <h3>2. Report</h3>
              <p className="muted">Submit location, image, and details.</p>
            </div>
            <div className="card">
              <h3>3. Resolve</h3>
              <p className="muted">Authorities track and fix potholes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Get Started</h2>
          <div className="cta-actions">
            <a href="/register" className="button button-primary button-lg">Citizen Sign Up</a>
            <a href="/municipal/login" className="button button-outline button-lg">Municipal Login</a>
          </div>
        </div>
      </section>
    </div>
  );
}
