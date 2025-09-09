// components/Contact.js - Updated with proper FontAwesome icons
// Professional contact section with working FontAwesome icon integration

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faDownload,
  faPaperPlane,
  faGraduationCap,
  faTrophy,
  faUsers,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  // Contact information - updated with proper FontAwesome icon references
  const contactInfo = [
    {
      id: "email",
      icon: faEnvelope,
      title: "Email",
      value: "somaanm02@gmail.com",
      link: "mailto:somaanm02@gmail.com",
      type: "email",
      description: "Best way to reach me",
      showExternalIcon: true,
    },
    {
      id: "github",
      icon: faGithub,
      title: "GitHub",
      value: "github.com/Somaan",
      link: "https://github.com/Somaan",
      type: "external",
      description: "View my code repositories",
      showExternalIcon: true,
    },
    {
      id: "linkedin",
      icon: faLinkedin,
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://linkedin.com/in/somaan-mirza",
      type: "external",
      description: "Professional networking",
      showExternalIcon: true,
    },
    {
      id: "location",
      icon: faMapMarkerAlt,
      title: "Location",
      value: "London, United Kingdom",
      link: null,
      type: "info",
      description: "Available for remote & on-site work",
      showExternalIcon: false,
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
    link.href = "/documents/Somaan-Mirza-CV.pdf";
    link.download = "Somaan-Mirza-CV.pdf";
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
          {/* About Me Section - Now First */}
          <div className="bio-section">
            <div className="bio-card glass-card">
              <h3>About Me</h3>
              <p>
                Currently pursuing a Masters in Computer Science, I'm passionate
                about software development and systems engineering, with
                expertise in building secure, scalable systems that solve
                real-world problems. I believe in creating technology that makes
                a measurable impact. When I'm not coding, you'll find me on the
                squash court or playing guitar. Squash has taught me strategy
                and quick decision-making. As Squash Club President, I've
                developed leadership and team-building skills that enhance my
                collaborative approach to software development.
              </p>

              <div className="bio-highlights">
                <div className="highlight-item">
                  <FontAwesomeIcon icon={faGraduationCap} />
                  <span>MSc Advanced Computer Science (In Progress)</span>
                </div>
                <div className="highlight-item">
                  <FontAwesomeIcon icon={faTrophy} />
                  <span>BSc Business Information Systems (2:1)</span>
                </div>
                <div className="highlight-item">
                  <FontAwesomeIcon icon={faUsers} />
                  <span>UEA Squash President</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="bio-actions">
                <button
                  className="btn-primary"
                  onClick={() =>
                    handleContactClick("mailto:somaanm02@gmail.com", "email")
                  }
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                  Get In Touch
                </button>

                <button className="btn-secondary" onClick={handleDownloadCV}>
                  <FontAwesomeIcon icon={faDownload} />
                  Download CV
                </button>
              </div>
            </div>
          </div>

          {/* Contact Grid - Now Second */}
          <div className="contact-grid">
            {contactInfo.map((contact) => (
              <ContactCard
                key={contact.id}
                contact={contact}
                onContactClick={handleContactClick}
              />
            ))}
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
        <FontAwesomeIcon icon={contact.icon} />
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
            {contact.showExternalIcon && (
              <FontAwesomeIcon icon={faExternalLinkAlt} />
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
