import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Hero = ({ scrollToSection }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);

  // Check if device is mobile/tablet and window height
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      const height = window.innerHeight;
      setIsMobile(mobile);
      setWindowHeight(height);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle call-to-action button clicks
  const handleViewProjects = () => {
    scrollToSection("projects");
  };

  const handleGetInTouch = () => {
    scrollToSection("contact");
  };

  // Download CV function
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/documents/Somaan_Mirza_CV.pdf";
    link.download = "Somaan_Mirza_CV.pdf";
    link.click();
  };

  // Determine if we should show scroll indicator
  const shouldShowScrollIndicator = () => {
    // Hide on very small screens or short viewport heights
    if (isMobile && (window.innerWidth <= 480 || windowHeight <= 600)) {
      return false;
    }
    return true;
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Hero Content */}
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for opportunities
          </div>

          <h1 className="hero-title">Somaan Mirza</h1>

          <p className="hero-subtitle">Full-Stack Developer & Researcher</p>

          <p className="hero-description">
            Specializing in AI-powered applications, computer vision systems,
            and machine learning research. Building secure, scalable solutions
            that solve real-world problems with measurable impact.
          </p>

          {/* Quick Stats - Cleaner Version */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Major Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">84%</span>
              <span className="stat-label">Peak Accuracy</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">326</span>
              <span className="stat-label">Tests Passed</span>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={handleViewProjects}
              aria-label="View my projects"
            >
              View Projects
              <i className="fas fa-arrow-right" aria-hidden="true"></i>
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
      </div>

      {/* Conditional Scroll Indicator */}
      {shouldShowScrollIndicator() && (
        <div className="scroll-indicator" onClick={handleViewProjects}>
          <div className="scroll-arrow">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <span>Scroll to explore</span>
        </div>
      )}
    </section>
  );
};

export default Hero;
