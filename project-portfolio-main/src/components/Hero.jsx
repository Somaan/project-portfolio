// components/Hero.js - Hero/Landing Section Component
// Main introduction section with call-to-action buttons

import React from "react";

const Hero = ({ scrollToSection }) => {
  // Handle call-to-action button clicks
  const handleViewProjects = () => {
    scrollToSection("projects");
  };

  const handleGetInTouch = () => {
    scrollToSection("contact");
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="hero-title">Software Engineer & Systems Developer</h1>

          <p className="hero-subtitle">
            MSc Advanced Computer Science Student specializing in Software &
            Data Engineering
          </p>

          <p className="hero-description">
            Passionate about building secure, scalable systems with expertise in
            full-stack development, cybersecurity, and AI integration. Currently
            pursuing advanced studies at Queen Mary University of London.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={handleViewProjects}
              aria-label="View my projects"
            >
              <i className="fas fa-code" aria-hidden="true"></i>
              View Projects
            </button>

            <button
              className="btn-secondary"
              onClick={handleGetInTouch}
              aria-label="Get in touch with me"
            >
              <i className="fas fa-envelope" aria-hidden="true"></i>
              Get In Touch
            </button>
          </div>
        </div>

        {/* Hero Image/Photo */}
        <div className="hero-image">
          {/* PLACEHOLDER: Add professional headshot photo here */}
          {/* 
            INSTRUCTIONS FOR IMAGE:
            - Take a professional headshot photo
            - Clean background (white/neutral preferred)
            - Professional attire (business casual or formal)
            - Good lighting with clear facial features
            - High resolution (at least 600x600px)
            - Square crop preferred for circular styling
            - Save as hero-photo.jpg in public/images/ folder
            - Replace this placeholder div with: <img src="/images/hero-photo.jpg" alt="Somaan Mirza" className="hero-photo" />
          */}
          <div className="placeholder-image">
            <i className="fas fa-user" aria-hidden="true"></i>
            <p className="placeholder-text">Professional Photo</p>
            <p className="placeholder-note">
              Add your professional headshot here
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
