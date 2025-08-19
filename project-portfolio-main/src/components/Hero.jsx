import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faMouse } from "@fortawesome/free-solid-svg-icons";

const Hero = ({ scrollToSection }) => {
  // Handle call-to-action button clicks
  const handleViewProjects = () => {
    scrollToSection("projects");
  };

  const handleGetInTouch = () => {
    scrollToSection("contact");
  };

  // Download CV function
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/documents/Somaan_Mirza_CV";
    link.download = "Somaan_Mirza_CV.pdf";
    link.click();
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Hero Content */}
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-badge">Available for opportunities</div>

          <h1 className="hero-title">Building Innovative Software Solutions</h1>

          <p className="hero-subtitle">
            Experienced in Full-Stack Development, AI Integration & Computer
            Vision
          </p>

          <p className="hero-description">
            I create cutting-edge applications that solve real-world problems.
            From AI-powered cybersecurity education platforms to computer vision
            sports technology - Building systems that have measurable impact.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={handleViewProjects}
              aria-label="View my projects"
            >
              <i className="fas fa-rocket" aria-hidden="true"></i>
              Explore My Work
            </button>

            <button
              className="btn-secondary"
              onClick={handleDownloadCV}
              aria-label="Download my CV"
            >
              <i className="fas fa-download" aria-hidden="true"></i>
              Download CV
            </button>
          </div>
        </div>

        {/* Interactive Demo Window */}
        <div className="hero-demo">
          <div className="demo-window">
            {/* Demo Window Header */}
            <div className="demo-header">
              <div className="demo-dots">
                <div className="demo-dot"></div>
                <div className="demo-dot"></div>
                <div className="demo-dot"></div>
              </div>
            </div>

            {/* Demo Content */}
            <div className="demo-content">
              <div className="demo-icon">
                <i className="fas fa-code" aria-hidden="true"></i>
              </div>
              <h3>Project Showcase</h3>
              <p className="demo-text">
                Explore interactive demonstrations of SecurityQuest and Squash
                Hawkeye
              </p>

              {/* Quick Stats */}
              <div className="quick-stats">
                <div className="stat-item">
                  <span className="stat-number">2</span>
                  <span className="stat-label">Major Projects</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">82%</span>
                  <span className="stat-label">Accuracy Achieved</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">326</span>
                  <span className="stat-label">Tests Passed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" onClick={handleViewProjects}>
        <div className="scroll-arrow">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <span>
          <FontAwesomeIcon icon={faMouse} />
          Scroll to explore
        </span>
      </div>
    </section>
  );
};

export default Hero;
