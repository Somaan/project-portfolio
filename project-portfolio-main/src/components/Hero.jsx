import React from "react";

const Hero = ({ scrollToSection }) => {
  const handleViewProjects = () => {
    scrollToSection("projects");
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/documents/Somaan_Mirza_CV.pdf";
    link.download = "Somaan_Mirza_CV.pdf";
    link.click();
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-greeting">Welcome! I'm</span>
          <h3 className="hero-name">Somaan Mirza</h3>

          <p className="hero-description">
            I made this portfolio to showcase what projects I've built over the
            years, spanning from full stack applications using local LLM
            applications, computer vision systems, and various machine learning
            projects. I am currently completing my masters in Advanced Computer
            Science student at Queen Mary, specialising in Data & Software
            Engineering. My MSc research project will focus on deep learning
            tools for medical diagnostics.
          </p>

          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={handleViewProjects}
              aria-label="View my projects"
            >
              View Projects
            </button>
            <button
              className="btn-secondary"
              onClick={handleDownloadCV}
              aria-label="Download my CV"
            >
              Download CV
            </button>
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
