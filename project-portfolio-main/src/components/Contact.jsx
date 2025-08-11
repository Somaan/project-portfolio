// components/Contact.js - Streamlined Contact Section
// Focused on professional contact and current availability for project showcase

import React from "react";

const Contact = () => {
  // Contact information from CV - streamlined for project portfolio
  const contactInfo = [
    {
      id: "email",
      icon: "fas fa-envelope",
      title: "Email",
      value: "somaanm02@gmail.com",
      link: "mailto:somaanm02@gmail.com",
      type: "email",
      description: "Best way to reach me",
    },
    {
      id: "github",
      icon: "fab fa-github",
      title: "GitHub",
      value: "github.com/Somaan",
      link: "https://github.com/Somaan",
      type: "external",
      description: "View my code repositories",
    },
    {
      id: "linkedin",
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://linkedin.com/in/somaan-mirza", // Add your actual LinkedIn
      type: "external",
      description: "Professional networking",
    },
    {
      id: "location",
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "London, United Kingdom",
      link: null,
      type: "info",
      description: "Available for remote & on-site work",
    },
  ];

  // Handle contact link clicks
  const handleContactClick = (link, type) => {
    if (link) {
      if (type === "external") {
        window.open(link, "_blank", "noopener noreferrer");
      } else {
        window.location.href = link;
      }
    }
  };

  // Download CV function
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/documents/Somaan_Mirza_CV.pdf"; // Add your CV to public/documents/
    link.download = "Somaan_Mirza_CV.pdf";
    link.click();
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="section-container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">
          Ready to collaborate on innovative projects or discuss exciting
          opportunities
        </p>

        <div className="contact-content">
          {/* Quick Contact Grid */}
          <div className="contact-grid">
            {contactInfo.map((contact) => (
              <ContactCard
                key={contact.id}
                contact={contact}
                onContactClick={handleContactClick}
              />
            ))}
          </div>

          {/* Current Status & Availability */}
          <div className="availability-section">
            <div className="availability-card glass-card">
              <div className="availability-header">
                <div className="status-indicator active"></div>
                <h3>Available for New Projects</h3>
              </div>

              <div className="availability-content">
                <p className="availability-description">
                  Currently pursuing MSc Advanced Computer Science at Queen Mary
                  University of London. Open to exciting opportunities in
                  software development, AI integration, and innovative
                  technology solutions.
                </p>

                <div className="availability-tags">
                  <span className="availability-tag">Software Engineering</span>
                  <span className="availability-tag">AI Development</span>
                  <span className="availability-tag">Computer Vision</span>
                  <span className="availability-tag">
                    Full-Stack Development
                  </span>
                  <span className="availability-tag">System Architecture</span>
                </div>

                <div className="availability-actions">
                  <button
                    className="btn-primary"
                    onClick={() =>
                      handleContactClick("mailto:somaanm02@gmail.com", "email")
                    }
                  >
                    <i className="fas fa-paper-plane" aria-hidden="true"></i>
                    Get In Touch
                  </button>

                  <button className="btn-secondary" onClick={handleDownloadCV}>
                    <i className="fas fa-download" aria-hidden="true"></i>
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Bio */}
          <div className="bio-section">
            <div className="bio-card glass-card">
              <h3>About Me</h3>
              <p>
                I'm a passionate software engineer with expertise in building
                secure, scalable systems that solve real-world problems. My work
                spans AI-powered educational platforms, computer vision
                applications, and full-stack web development. I believe in
                creating technology that makes a measurable impact.
              </p>

              <div className="bio-highlights">
                <div className="highlight-item">
                  <i className="fas fa-graduation-cap" aria-hidden="true"></i>
                  <span>MSc Advanced Computer Science (In Progress)</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-trophy" aria-hidden="true"></i>
                  <span>BSc Business Information Systems (2:1)</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-users" aria-hidden="true"></i>
                  <span>Squash Club President & Team Leader</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Individual Contact Card Component
const ContactCard = ({ contact, onContactClick }) => {
  const handleClick = () => {
    onContactClick(contact.link, contact.type);
  };

  return (
    <div className="contact-card glass-card">
      <div className="contact-card-icon">
        <i className={contact.icon} aria-hidden="true"></i>
      </div>

      <div className="contact-card-content">
        <h4 className="contact-card-title">{contact.title}</h4>
        <p className="contact-card-description">{contact.description}</p>

        {contact.link ? (
          <button
            className="contact-card-link"
            onClick={handleClick}
            aria-label={`Contact via ${contact.title}: ${contact.value}`}
          >
            {contact.value}
            {contact.type === "external" && (
              <i className="fas fa-external-link-alt" aria-hidden="true"></i>
            )}
          </button>
        ) : (
          <span className="contact-card-value">{contact.value}</span>
        )}
      </div>
    </div>
  );
};

export default Contact;
