export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>PAVE</h1>
            <h2>Pothole Assessment &amp; Vision-based Evaluation</h2>
            <p className="lead muted">
              Empowering citizens and municipalities to detect, report, and resolve potholes faster.
              Building safer roads through technology and community collaboration.
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

      {/* Demo Statistics */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">Platform Impact <span className="badge badge-neutral">Demo Data</span></h2>
          <p className="section-subtitle muted">
            Sample statistics showcasing the potential impact of the PAVE platform
          </p>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">2,847</div>
              <div className="stat-label">Total Reports</div>
              <div className="stat-subtext muted">Citizen-submitted complaints</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">1,892</div>
              <div className="stat-label">Resolved Cases</div>
              <div className="stat-subtext muted">Road repairs completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">542</div>
              <div className="stat-label">Pending Reports</div>
              <div className="stat-subtext muted">Under review or assignment</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">413</div>
              <div className="stat-label">High Priority</div>
              <div className="stat-subtext muted">Requiring urgent attention</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About PAVE</h2>
          <div className="about-content">
            <p className="lead muted">
              PAVE is a civic-tech solution designed for the Smart India Hackathon that bridges
              the gap between citizens and municipal authorities for road maintenance.
            </p>
            <p className="muted">
              With AI-assisted pothole detection, streamlined reporting, and intelligent complaint
              management, PAVE helps prioritize repairs, reduce response times, and create safer
              roads for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle muted">
            A simple three-step process from detection to resolution
          </p>
          <div className="grid-3">
            <div className="card feature-card">
              <div className="feature-icon">
                <span className="icon-circle">1</span>
              </div>
              <h3>Detect &amp; Report</h3>
              <p className="muted">
                Citizens can upload road images for AI-assisted pothole detection, or manually
                report issues with location and description.
              </p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">
                <span className="icon-circle">2</span>
              </div>
              <h3>Review &amp; Assign</h3>
              <p className="muted">
                Municipal authorities review reports on an interactive map, prioritize based on
                severity, and assign to repair teams.
              </p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">
                <span className="icon-circle">3</span>
              </div>
              <h3>Track &amp; Resolve</h3>
              <p className="muted">
                Track complaint status in real-time, monitor progress, and mark potholes as
                resolved once repairs are complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Detection Highlight */}
      <section className="ai-section">
        <div className="container">
          <div className="ai-content card">
            <h2>AI-Assisted Detection</h2>
            <p className="muted">
              Leverage computer vision to detect potholes automatically from uploaded images.
              The AI detection interface is designed for seamless integration with a separately
              developed model. <strong>Note:</strong> AI predictions are shown only when connected
              to the actual model/API.
            </p>
          </div>
        </div>
      </section>

      {/* Portal Entry Points */}
      <section className="cta-section">
        <div className="container">
          <h2 className="section-title">Choose Your Portal</h2>
          <p className="section-subtitle muted">
            Access the right dashboard based on your role
          </p>
          <div className="portal-grid">
            <div className="card portal-card">
              <h3>Citizen Portal</h3>
              <p className="muted">
                Report potholes, track your complaints, view complaint history, and stay updated
                on resolution status.
              </p>
              <div className="portal-actions">
                <a href="/login" className="button button-primary">Login</a>
                <a href="/register" className="button button-outline">Sign Up</a>
              </div>
            </div>
            <div className="card portal-card">
              <h3>Municipal Portal</h3>
              <p className="muted">
                Manage complaints, assign repair work, update statuses, prioritize cases, and
                monitor road conditions across your jurisdiction.
              </p>
              <div className="portal-actions">
                <a href="/municipal/login" className="button button-primary">Login</a>
                <a href="/municipal/register" className="button button-outline">Sign Up</a>
              </div>
            </div>
          </div>
          <div className="cta-primary">
            <a href="/report" className="button button-primary button-lg">
              Report a Pothole Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
