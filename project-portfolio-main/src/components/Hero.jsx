import { CV_FILENAME, CV_PATH } from "../utils/links";

const Hero = ({ scrollToSection }) => {
  const handleViewProjects = () => {
    scrollToSection("projects");
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-greeting">Welcome! I'm</span>
          <h5 className="hero-name">Somaan Mirza</h5>

          <p className="hero-description">
            A Master's student in Advanced Computer Science at Queen Mary
            University of London, specialising in Data & Software Engineering.
            In my portfolio, you'll find projects that demonstrate my ability to
            build full-stack applications with AI integrated features, computer
            vision systems, and machine learning solutions. My MSc research
            focuses on deep learning tools for medical diagnostics.
          </p>

          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={handleViewProjects}
              aria-label="View my projects"
            >
              View Projects
            </button>
            <a
              className="btn-secondary"
              href={CV_PATH}
              download={CV_FILENAME}
              aria-label="Download my CV"
            >
              Download CV
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">3+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-value">84%</span>
              <span className="stat-label">ML Accuracy</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-value">326</span>
              <span className="stat-label">Tests Passed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
