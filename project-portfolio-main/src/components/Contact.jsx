// components/Contact.js - Contact Section Component
// Professional contact information and current availability status

import React from "react";

const Contact = () => {
  // Contact information from CV
  const contactInfo = [
    {
      id: "email",
      icon: "fas fa-envelope",
      title: "Email",
      value: "somaanm02@gmail.com",
      link: "mailto:somaanm02@gmail.com",
      type: "email",
    },
    {
      id: "phone",
      icon: "fas fa-phone",
      title: "Phone",
      value: "+44 7443 875073",
      link: "tel:+447443875073",
      type: "phone",
    },
    {
      id: "github",
      icon: "fab fa-github",
      title: "GitHub",
      value: "github.com/Somaan",
      link: "https://github.com/Somaan",
      type: "external",
    },
    {
      id: "location",
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "London, United Kingdom",
      link: null,
      type: "info",
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

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Let's discuss opportunities in software engineering, cybersecurity, AI
          development, or innovative technology solutions
        </p>

        <div className="contact-content">
          {/* Contact Information Grid */}
          <ContactInfoGrid
            contactInfo={contactInfo}
            onContactClick={handleContactClick}
          />

          {/* Current Status & Availability */}
          <CurrentStatus />

          {/* Professional Interests */}
          <ProfessionalInterests />
        </div>
      </div>
    </section>
  );
};

// Contact Information Grid Component
const ContactInfoGrid = ({ contactInfo, onContactClick }) => {
  return (
    <div className="contact-info">
      <h3 className="contact-section-title">
        <i className="fas fa-address-card" aria-hidden="true"></i>
        Contact Information
      </h3>

      <div className="contact-grid">
        {contactInfo.map((contact) => (
          <div key={contact.id} className="contact-item">
            <div className="contact-icon">
              <i className={contact.icon} aria-hidden="true"></i>
            </div>

            <div className="contact-details">
              <h4 className="contact-title">{contact.title}</h4>

              {contact.link ? (
                <button
                  className="contact-link"
                  onClick={() => onContactClick(contact.link, contact.type)}
                  aria-label={`Contact via ${contact.title}: ${contact.value}`}
                >
                  {contact.value}
                  {contact.type === "external" && (
                    <i
                      className="fas fa-external-link-alt"
                      aria-hidden="true"
                    ></i>
                  )}
                </button>
              ) : (
                <p className="contact-text">{contact.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Current Status Component
const CurrentStatus = () => {
  return (
    <div className="current-status">
      <h3 className="contact-section-title">
        <i className="fas fa-info-circle" aria-hidden="true"></i>
        Current Status
      </h3>

      <div className="status-content">
        <div className="status-item">
          <div className="status-indicator active"></div>
          <div className="status-details">
            <h4 className="status-title">Available for Opportunities</h4>
            <p className="status-description">
              Currently pursuing MSc Advanced Computer Science at Queen Mary
              University of London (2025-2026) and actively seeking
              opportunities in:
            </p>

            <div className="opportunity-tags">
              <span className="opportunity-tag">Software Engineering</span>
              <span className="opportunity-tag">Cybersecurity</span>
              <span className="opportunity-tag">AI Development</span>
              <span className="opportunity-tag">Full-Stack Development</span>
              <span className="opportunity-tag">System Architecture</span>
            </div>
          </div>
        </div>

        <div className="status-item">
          <div className="status-indicator education"></div>
          <div className="status-details">
            <h4 className="status-title">Academic Pursuits</h4>
            <p className="status-description">
              Specializing in Software & Data Engineering with focus on Machine
              Learning, Security & Authentication, and advanced system design
              patterns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Professional Interests Component
const ProfessionalInterests = () => {
  const interests = [
    {
      icon: "fas fa-shield-alt",
      title: "Cybersecurity",
      description:
        "Social engineering defense, secure authentication systems, and gamified security education",
    },
    {
      icon: "fas fa-robot",
      title: "AI Integration",
      description:
        "Local LLM implementation, personalized learning systems, and AI-powered feedback mechanisms",
    },
    {
      icon: "fas fa-eye",
      title: "Computer Vision",
      description:
        "Multi-modal processing, real-time detection systems, and sports technology applications",
    },
    {
      icon: "fas fa-server",
      title: "System Architecture",
      description:
        "Three-tier design patterns, scalable database systems, and full-stack development",
    },
  ];

  return (
    <div className="professional-interests">
      <h3 className="contact-section-title">
        <i className="fas fa-lightbulb" aria-hidden="true"></i>
        Areas of Interest
      </h3>

      <div className="interests-grid">
        {interests.map((interest, index) => (
          <div key={index} className="interest-item">
            <div className="interest-icon">
              <i className={interest.icon} aria-hidden="true"></i>
            </div>
            <div className="interest-content">
              <h4 className="interest-title">{interest.title}</h4>
              <p className="interest-description">{interest.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
