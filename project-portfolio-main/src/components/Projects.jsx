// components/Projects.js - Enhanced Projects Showcase with Modal Details
// Features clean project cards with modal popups for detailed information

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  // State for managing which project modal is open
  const [activeModal, setActiveModal] = useState(null);

  // State for scroll animations
  const [visibleCards, setVisibleCards] = useState(new Set());

  // Project data from dissertation and reports - ALL REAL DATA
  const projects = [
    {
      id: "securityquest",
      title: "SecurityQuest",
      subtitle: "AI-Powered Cybersecurity Education Platform",
      period: "2024-2025 (Final Year Project)",
      category: "Full-Stack Development",
      primaryTech: "React",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Express.js",
        "LLM Integration",
        "Jest",
        "bcrypt",
      ],
      description:
        "Revolutionary gamified platform addressing human vulnerability to social engineering attacks through interactive learning experiences. Features AI-powered personalized feedback and comprehensive achievement systems.",
      keyMetrics: [
        {
          label: "User Improvement",
          value: "52.2%",
          description: "Increase in cybersecurity confidence",
        },
        {
          label: "Test Coverage",
          value: "100%",
          description: "Across 326 automated test cases",
        },
        {
          label: "User Accuracy",
          value: "100%",
          description: "Phishing identification post-training",
        },
      ],
      keyAchievements: [
        "52.2% improvement in user cybersecurity confidence through testing across 6 participants",
        "100% test coverage across 326 automated test cases using Jest and React Testing Library",
        "AI-powered personalized feedback system using locally-hosted LLM (Ollama)",
        "Three-tier progressive difficulty system covering phishing, vishing, smishing, and spear-phishing",
        "100% of participants correctly identified phishing responses after intervention (vs 66.6% before)",
        "83.3% accuracy identifying threats across multiple communication channels",
      ],
      technicalHighlights: [
        "PERN stack architecture (PostgreSQL-Express-React-Node.js) with integrated LLM capabilities",
        "Secure authentication with bcrypt hashing (work factor 10) and CAPTCHA verification",
        "Achievement system with streak tracking, leaderboards, and visual progress indicators",
        "Comprehensive user analytics with detailed performance tracking and behavioral analysis",
        "Multi-format quiz system: email phishing, SMS smishing, voice transcript analysis",
        "Real-time feedback generation with context-aware AI recommendations",
      ],
      liveDemo: null,
      githubRepo: "https://github.com/Somaan/SecurityQuest",
      images: [
        {
          src: "/images/dashboard.png",
          alt: "SecurityQuest Main Dashboard Interface",
          caption:
            "Main dashboard showing progress tracking, achievement notifications, and learning modules",
        },
        {
          src: "/images/system architecture.png",
          alt: "System Architecture - SecurityQuest (PERN Stack with LLM Integration)",
          caption:
            "Three-tier system architecture showing client-side React, server-side Node.js/Express, and PostgreSQL database with Ollama LLM layer",
        },
        {
          src: "/images/email phishing.png",
          alt: "Email Phishing Quiz Interface",
          caption:
            "Interactive phishing identification with clickable suspicious elements",
        },
        {
          src: "/images/pre vs post.png",
          alt: "Pre vs Post-Intervention Security Knowledge Results",
          caption:
            "User testing results showing 52.2% average improvement in cybersecurity confidence across all measured categories",
        },
      ],
    },
    {
      id: "squash-hawkeye",
      title: "Squash Hawkeye",
      subtitle: "Computer Vision Sports Technology",
      period: "2024 (Ubiquitous Computing Assignment)",
      category: "Computer Vision",
      primaryTech: "Python",
      technologies: [
        "Python",
        "OpenCV",
        "Java",
        "FFmpeg",
        "HoughCircles",
        "Audio Processing",
      ],
      description:
        "Innovative multi-modal system integrating computer vision and audio processing for automated sports officiating. Created cost-effective alternative to professional systems costing £60,000-£100,000.",
      keyMetrics: [
        {
          label: "Accuracy Rate",
          value: "82%",
          description: "In challenging edge cases",
        },
        {
          label: "Cost Reduction",
          value: "99%",
          description: "vs professional systems",
        },
        {
          label: "Processing Speed",
          value: "60fps",
          description: "Real-time video analysis",
        },
      ],
      keyAchievements: [
        "82% accuracy in challenging edge cases through systematic algorithm optimization",
        "Successfully processed smartphone video data (1080p @ 60fps) with audio synchronization",
        "Adaptive algorithms managing varied environmental conditions and detection challenges",
        "Cost-effective solution using accessible hardware (smartphone, laptop) vs professional systems",
        "Real-time audio impact detection with 200ms minimum gap between detections",
        "Pixel-perfect spatial analysis implementing official squash rules (ball on line = OUT)",
      ],
      technicalHighlights: [
        "Multi-modal processing pipeline combining audio impact detection with visual ball tracking",
        "OpenCV-based ball detection using HoughCircles transform with tuned parameters (dp=1.2, minDist=20)",
        "Adaptive audio processing with dynamic thresholding at 70% of maximum amplitude",
        "Synchronized processing handling smartphone video with precise timestamp correlation",
        "Image enhancement pipeline improving contrast and brightness for better detection",
        "Decision logic implementing official squash service line rules with 1-pixel tolerance",
      ],
      liveDemo: null,
      githubRepo: "https://github.com/Somaan/SquashHawkeye",
      images: [
        {
          src: "/images/squash-detection.png",
          alt: "Ball Detection and Line Calling",
          caption:
            "Green circle around detected squash ball with red service line and IN/OUT decision",
        },
        {
          src: "/images/squash-setup.png",
          alt: "Recording Setup and System",
          caption:
            "Smartphone recording setup positioned on tripod with clear view of service box",
        },
      ],
    },
  ];

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Modal functions
  const openModal = (projectId) => {
    setActiveModal(projectId);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = "unset"; // Restore scrolling
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (activeModal) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => document.removeEventListener("keydown", handleEscape);
  }, [activeModal]);

  const activeProject = projects.find((p) => p.id === activeModal);

  return (
    <section id="projects" className="projects-section section">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Innovative solutions combining AI, computer vision, and full-stack
          development to solve real-world problems
        </p>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={openModal}
              isVisible={visibleCards.has(`project-${project.id}`)}
              animationDelay={index * 0.2}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="projects-cta">
          <h3>Interested in collaborating?</h3>
          <p>
            I'm always excited to work on innovative projects that push the
            boundaries of technology.
          </p>
          <button
            className="btn-primary"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            <FontAwesomeIcon icon="rocket" />
            Let's Build Something Amazing
          </button>
        </div>
      </div>

      {/* Project Details Modal */}
      {activeModal && activeProject && (
        <ProjectModal project={activeProject} onClose={closeModal} />
      )}
    </section>
  );
};

// Enhanced Project Card Component (Compact Version)
const ProjectCard = ({ project, onOpenModal, isVisible, animationDelay }) => {
  const handleExternalLink = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener noreferrer");
    }
  };

  return (
    <div
      id={`project-${project.id}`}
      className={`project-card glass-card ${isVisible ? "visible" : ""}`}
      style={{ animationDelay: `${animationDelay}s` }}
    >
      {/* Project Header */}
      <div className="project-header">
        <div className="project-meta">
          <span className="project-category">{project.category}</span>
          <span className="project-period">
            <FontAwesomeIcon icon="calendar-alt" />
            {project.period}
          </span>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
      </div>

      {/* Key Metrics */}
      <div className="project-metrics">
        {project.keyMetrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <span className="metric-value">{metric.value}</span>
            <span className="metric-label">{metric.label}</span>
            <span className="metric-description">{metric.description}</span>
          </div>
        ))}
      </div>

      {/* Technology Tags */}
      <div className="project-technologies">
        <div className="tech-tags">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Project Description */}
      <p className="project-description">{project.description}</p>

      {/* Action Buttons */}
      <div className="project-actions">
        <button
          className="details-button"
          onClick={() => onOpenModal(project.id)}
          aria-label={`View detailed information about ${project.title}`}
        >
          <span>View Project Details</span>
          <FontAwesomeIcon icon="arrow-right" />
        </button>

        <div className="external-links">
          {project.githubRepo && (
            <button
              className="btn-secondary btn-github"
              onClick={() => handleExternalLink(project.githubRepo)}
              aria-label={`View ${project.title} on GitHub`}
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
              View Code
            </button>
          )}
          {project.liveDemo && (
            <button
              className="btn-primary btn-demo"
              onClick={() => handleExternalLink(project.liveDemo)}
              aria-label={`View live demo of ${project.title}`}
            >
              <FontAwesomeIcon icon="external-link-alt" />
              Live Demo
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Project Modal Component
const ProjectModal = ({ project, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index = selectedImageIndex) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "unset"; // Restore background scrolling
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && lightboxOpen) {
        closeLightbox();
      }
    };
    if (lightboxOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [lightboxOpen]);

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleExternalLink = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener noreferrer");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-section">
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-subtitle">{project.subtitle}</p>
            <div className="modal-meta">
              <span className="modal-category">{project.category}</span>
              <span className="modal-period">{project.period}</span>
            </div>
          </div>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <FontAwesomeIcon icon="times" />
          </button>
        </div>
        {lightboxOpen && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <div
              className="lightbox-container"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="lightbox-close"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                <FontAwesomeIcon icon="times" />
              </button>

              {/* Navigation arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    className="lightbox-nav lightbox-prev"
                    onClick={prevImage}
                    aria-label="Previous image"
                  >
                    <FontAwesomeIcon icon="chevron-left" />
                  </button>
                  <button
                    className="lightbox-nav lightbox-next"
                    onClick={nextImage}
                    aria-label="Next image"
                  >
                    <FontAwesomeIcon icon="chevron-right" />
                  </button>
                </>
              )}

              {/* Main lightbox content */}
              <div className="lightbox-content">
                <img
                  src={project.images[selectedImageIndex].src}
                  alt={project.images[selectedImageIndex].alt}
                  className="lightbox-image"
                />

                {/* Caption */}
                <div className="lightbox-caption">
                  <h5>{project.images[selectedImageIndex].alt}</h5>
                  <p>{project.images[selectedImageIndex].caption}</p>
                </div>
              </div>

              {/* Image counter */}
              {project.images.length > 1 && (
                <div className="lightbox-counter">
                  {selectedImageIndex + 1} / {project.images.length}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="modal-body">
          {/* Image Gallery Section */}
          {project.images && project.images.length > 0 && (
            <div className="modal-gallery">
              <div className="gallery-main">
                <div
                  className="main-image-container"
                  onClick={() => openLightbox(selectedImageIndex)}
                >
                  <img
                    src={project.images[selectedImageIndex].src}
                    alt={project.images[selectedImageIndex].alt}
                    className="main-image clickable-image"
                  />

                  {/* Expand hint overlay */}
                  <div className="image-expand-overlay">
                    <div className="expand-hint">
                      <FontAwesomeIcon icon="expand-arrows-alt" />
                      <span>Click to expand</span>
                    </div>
                  </div>

                  {/* Your existing navigation arrows stay exactly the same */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        className="gallery-nav gallery-prev"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent triggering lightbox
                          prevImage();
                        }}
                        aria-label="Previous image"
                      >
                        <FontAwesomeIcon icon="chevron-left" />
                      </button>
                      <button
                        className="gallery-nav gallery-next"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent triggering lightbox
                          nextImage();
                        }}
                        aria-label="Next image"
                      >
                        <FontAwesomeIcon icon="chevron-right" />
                      </button>
                    </>
                  )}
                </div>
                <p className="image-caption">
                  {project.images[selectedImageIndex].caption}
                </p>
              </div>

              {project.images.length > 1 && (
                <div className="gallery-thumbnails">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      className={`thumbnail ${
                        index === selectedImageIndex ? "active" : ""
                      }`}
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <img src={image.src} alt={image.alt} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Content Sections */}
          <div className="modal-sections">
            {/* Key Achievements */}
            <div className="modal-section">
              <h3 className="section-title">
                <i className="fas fa-trophy" aria-hidden="true"></i>
                Key Achievements
              </h3>
              <ul className="achievements-list">
                {project.keyAchievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            {/* Technical Implementation */}
            <div className="modal-section">
              <h3 className="section-title">
                <i className="fas fa-cogs" aria-hidden="true"></i>
                Technical Implementation
              </h3>
              <ul className="technical-list">
                {project.technicalHighlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <div className="modal-actions">
            {project.githubRepo && (
              <button
                className="btn-github"
                onClick={() => handleExternalLink(project.githubRepo)}
              >
                <i className="fab fa-github" aria-hidden="true"></i>
                View on GitHub
              </button>
            )}
            {project.liveDemo && (
              <button
                className="btn-demo"
                onClick={() => handleExternalLink(project.liveDemo)}
              >
                <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                Live Demo
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
