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
      //period: "2024-2025 (Final Year Project)",
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
        "Revolutionary gamified platform addressing human vulnerability to social engineering attacks through interactive learning experiences. Features AI-powered personalised feedback and comprehensive achievement systems.",
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
        "AI-powered personalised feedback system using locally-hosted LLM (Ollama)",
        "Three-tier progressive difficulty system covering phishing, vishing, smishing, and spear-phishing",
        "100% of participants correctly identified phishing responses after intervention (vs 66.6% before)",
        "83.3% accuracy identifying threats across multiple communication channels",
      ],
      technicalHighlights: [
        "PERN stack architecture (PostgreSQL-Express-React-Node.js) with integrated LLM capabilities",
        "Secure authentication with bcrypt hashing (work factor 10) and CAPTCHA verification",
        "Achievement system with streak tracking, leaderboards, and visual progress indicators",
        "Comprehensive user analytics with detailed performance tracking and behavioural analysis",
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
      //period: "2024 (Ubiquitous Computing Assignment)",
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
          label: "Video Processing",
          value: "1080p@60fps",
          description: "Smartphone footage analysis",
        },
      ],
      keyAchievements: [
        "82% accuracy in challenging edge cases where ball position is critical for IN/OUT decisions",
        "Successfully developed offline processing pipeline handling smartphone video (1080p@60fps)",
        "Overcame Raspberry Pi hardware limitations by pivoting to PC-based offline analysis",
        "Cost-effective solution using accessible hardware (smartphone, laptop) vs professional systems",
        "Synchronised audio impact detection with visual ball tracking for accurate line calling",
        "Implemented official squash rules in decision logic (ball on line = OUT) with 1-pixel tolerance",
      ],
      technicalHighlights: [
        "Two-stage processing: smartphone video capture followed by offline PC analysis",
        "OpenCV-based ball detection using HoughCircles transform with tuned parameters (dp=1.2, minDist=20)",
        "Audio processing with FFmpeg extraction and Java-based impact detection at 70% amplitude threshold",
        "Synchronised processing handling smartphone video with precise timestamp correlation",
        "Image enhancement pipeline improving contrast and brightness for better detection",
        "Decision logic implementing official squash service line rules with 1-pixel tolerance",
      ],
      liveDemo: null,
      githubRepo: "https://github.com/Somaan/Squash-Hawkeye",
      images: [
        {
          src: "/images/Figure 1.png",
          alt: "Legal Squash Serve Trajectory Diagram",
          caption:
            "Official squash court diagram showing typical ball path during a legal serve, illustrating the technical requirements for service line detection",
        },
        {
          src: "/images/Figure 5.png",
          alt: "Smartphone Recording Setup",
          caption:
            "Cost-effective recording setup using smartphone on tripod positioned with clear view of service box, demonstrating accessible hardware alternative to professional systems",
        },
        {
          src: "/images/Figure 10.png",
          alt: "Edge Case Validation Results",
          caption:
            "Grid of challenging edge cases showing system accuracy in borderline scenarios where ball positions are critical for IN/OUT decisions, achieving 82% accuracy",
        },
        {
          src: "/images/Figure 11.png",
          alt: "Multi-Layer System Output",
          caption:
            "Console output showing precise coordinates, measurements, and decision logic - demonstrating the system's transparent multi-depth feedback for validation and development",
        },
      ],
    },
    {
      id: "ubiquitous-computing",
      title: "Sensing & Machine Learning",
      subtitle: "Ubiquitous Computing Research Applications",
      //period: "2024 (Ubiquitous Computing Labs)",
      category: "Machine Learning Research",
      primaryTech: "Python",
      technologies: [
        "Python",
        "scikit-learn",
        "NumPy",
        "Pandas",
        "Signal Processing",
        "Feature Engineering",
      ],
      description:
        "Comprehensive research project applying machine learning to mobile sensor data for activity recognition and indoor localisation. Achieved 84.33% cross-user accuracy through sophisticated feature engineering and robust experimental methodology.",
      keyMetrics: [
        {
          label: "Cross-User Accuracy",
          value: "84.33%",
          description: "Activity recognition across different users",
        },
        {
          label: "Feature Engineering",
          value: "13+",
          description: "Statistical, frequency, and temporal features",
        },
        {
          label: "Activity Classes",
          value: "7",
          description: "Stationary, walking, stairs, elevator, running",
        },
      ],
      keyAchievements: [
        "84.33% cross-user accuracy in activity recognition, demonstrating strong model generalisation",
        "Comprehensive feature engineering including FFT analysis, acceleration jerk, and signal energy ratios",
        "Robust experimental methodology with 5-fold cross-validation and person-independent testing",
        "Multi-modal sensor fusion combining accelerometer and barometer data for enhanced classification",
        "Indoor WiFi localisation using cosine similarity of signal strength fingerprints",
        "Systematic performance analysis with precision/recall metrics and detailed confusion matrices",
        "Real-world data collection across multiple users and environmental conditions",
      ],
      technicalHighlights: [
        "Advanced feature extraction: statistical measures, FFT power spectra (equal & logarithmic), pressure slopes",
        "Sensor fusion pipeline combining accelerometer magnitude, variance, and barometric pressure derivatives",
        "Cross-user validation demonstrating model robustness across different individuals and phone placements",
        "Dynamic thresholding and adaptive algorithms for handling varied environmental conditions",
        "WiFi fingerprinting using cosine similarity for indoor localisation across building floors",
        "Comprehensive data preprocessing: lowess smoothing, interpolation, duplicate removal",
        "Decision tree classification with recursive feature elimination for optimal feature selection",
      ],
      liveDemo: null,
      reportLink: "/documents/100318760.pdf",
      images: [
        {
          src: "/images/raw-sensor-data.png",
          alt: "Raw Sensor Data Visualisation",
          caption:
            "Time series visualisation showing accelerometer magnitude, barometric pressure, and activity labels across 7 different movement patterns",
        },
        {
          src: "/images/feature-analysis.png",
          alt: "Mean Acceleration Magnitude Analysis",
          caption:
            "Feature engineering showing distinct acceleration patterns: running peaks (~20m/s²), walking (~15m/s²), and stationary baseline (~9.8m/s²) demonstrating clear activity separability",
        },
        {
          src: "/images/confusion-matrices.png",
          alt: "Cross-User Validation Confusion Matrix",
          caption:
            "Cross-user validation results achieving 84.33% accuracy when trained on other users' data and tested on new subjects, demonstrating strong model generalisation across different individuals",
        },
        {
          src: "/images/wifi-localisation.png",
          alt: "WiFi Signal Strength Indoor Localisation",
          caption:
            "WiFi fingerprinting results showing signal strength patterns across different building locations and cosine similarity heatmap for location classification",
        },
        {
          src: "/images/wifi-combined-data.png",
          alt: "Enhanced WiFi Localisation with Combined User Data",
          caption:
            "Multi-user WiFi fingerprinting demonstrating improved location accuracy when aggregating signal data from multiple devices and users across building floors",
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
      </div>

      {/* Project Details Modal */}
      {activeModal && activeProject && (
        <ProjectModal project={activeProject} onClose={closeModal} />
      )}
    </section>
  );
};

// Enhanced Project Card Component with Consistent Buttons
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
      style={{
        animationDelay: `${animationDelay}s`,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: "650px",
        //margin: "0 auto",
        background: "rgba(255, 255, 255, 0.95)",
        borderRadius: "20px",
        padding: "2rem",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        transition: "all 0.3s ease",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Project Header */}
      <div
        className="project-header"
        style={{
          marginBottom: "1rem",
          minHeight: "120px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div className="project-meta">
          <span
            className="project-category"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              padding: "0.4rem 1rem",
              borderRadius: "20px",
              fontSize: "0.85rem",
              fontWeight: "500",
            }}
          >
            {project.category}
          </span>
        </div>
        <h3
          className="project-title"
          style={{
            fontSize: "1.8rem",
            color: "#1a202c",
            marginBottom: "0.5rem",
            fontWeight: "700",
          }}
        >
          {project.title}
        </h3>
        <p
          className="project-subtitle"
          style={{
            color: "#4a5568",
            fontSize: "1.1rem",
            fontWeight: "500",
          }}
        >
          {project.subtitle}
        </p>
      </div>

      {/* Key Metrics */}
      <div
        className="project-metrics"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "1rem",
          margin: "1rem 0",
          minHeight: "100px",
          alignItems: "stretch",
        }}
      >
        {project.keyMetrics.map((metric, index) => (
          <div
            key={index}
            className="metric-card"
            style={{
              background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              color: "white",
              padding: "1rem",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 4px 15px rgba(240, 147, 251, 0.3)",
            }}
          >
            <span
              className="metric-value"
              style={{
                display: "block",
                fontSize: "1.5rem",
                fontWeight: "700",
                marginBottom: "0.3rem",
              }}
            >
              {metric.value}
            </span>
            <span
              className="metric-label"
              style={{
                display: "block",
                fontSize: "0.85rem",
                fontWeight: "600",
                marginBottom: "0.2rem",
              }}
            >
              {metric.label}
            </span>
            <span
              className="metric-description"
              style={{
                display: "block",
                fontSize: "0.75rem",
                opacity: "0.9",
              }}
            >
              {metric.description}
            </span>
          </div>
        ))}
      </div>

      {/* Technology Tags */}
      <div
        className="project-technologies"
        style={{
          margin: "1rem 0",
          minHeight: "60px",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <div
          className="tech-tags"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="tech-tag"
              style={{
                background: "#e2e8f0",
                color: "#2d3748",
                padding: "0.4rem 0.8rem",
                borderRadius: "8px",
                fontSize: "0.85rem",
                fontWeight: "500",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Project Description */}
      <p
        className="project-description"
        style={{
          margin: "1rem 0",
          flexGrow: 1,
          minHeight: "80px",
          color: "#4a5568",
          lineHeight: "1.6",
        }}
      >
        {project.description}
      </p>

      {/* Action Buttons - Updated for consistent sizing */}
      <div
        className="project-actions"
        style={{
          marginTop: "auto",
          paddingTop: "0.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <button
          className="project-button project-button-primary"
          onClick={() => onOpenModal(project.id)}
          aria-label={`View detailed information about ${project.title}`}
          style={{
            width: "100%",
            height: "50px",
            padding: "12px 16px",
            border: "none",
            borderRadius: "12px",
            fontSize: "1rem",
            fontWeight: "600",
            color: "white",
            cursor: "pointer",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
        >
          <span>View Project Details</span>
          <FontAwesomeIcon icon="arrow-right" />
        </button>

        {project.githubRepo && (
          <button
            className="project-button project-button-secondary"
            onClick={() => handleExternalLink(project.githubRepo)}
            aria-label={`View ${project.title} on GitHub`}
            style={{
              width: "100%",
              height: "50px",
              padding: "12px 16px",
              border: "none",
              borderRadius: "12px",
              fontSize: "1rem",
              fontWeight: "600",
              color: "white",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              background: "#24292e",
            }}
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
            <span>View Code</span>
          </button>
        )}

        {project.reportLink && (
          <button
            className="project-button project-button-report"
            onClick={() => handleExternalLink(project.reportLink)}
            aria-label={`View ${project.title} research report`}
            style={{
              width: "100%",
              height: "50px",
              padding: "12px 16px",
              border: "none",
              borderRadius: "12px",
              fontSize: "1rem",
              fontWeight: "600",
              color: "white",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              background: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
            }}
          >
            <FontAwesomeIcon icon="file-alt" />
            <span>View Research Report</span>
          </button>
        )}

        {project.liveDemo && (
          <button
            className="project-button project-button-demo"
            onClick={() => handleExternalLink(project.liveDemo)}
            aria-label={`View live demo of ${project.title}`}
            style={{
              width: "100%",
              height: "50px",
              padding: "12px 16px",
              border: "none",
              borderRadius: "12px",
              fontSize: "1rem",
              fontWeight: "600",
              color: "white",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            }}
          >
            <FontAwesomeIcon icon="external-link-alt" />
            <span>Live Demo</span>
          </button>
        )}
      </div>
    </div>
  );
};

// Enhanced Project Modal Component with Mobile Swipe Support
const ProjectModal = ({ project, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Touch handling for swipe gestures
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isSwipeActive, setIsSwipeActive] = useState(false);

  const openLightbox = (index = selectedImageIndex) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "unset";
    setIsSwipeActive(false);
  };

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

  // Touch event handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwipeActive(true);
  };

  const handleTouchMove = (e) => {
    if (!isSwipeActive) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || !isSwipeActive) {
      setIsSwipeActive(false);
      return;
    }

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextImage();
    }

    if (distance < -minSwipeDistance) {
      prevImage();
    }

    setIsSwipeActive(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!lightboxOpen) return;

      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "ArrowRight":
          nextImage();
          break;
        default:
          break;
      }
    };

    if (lightboxOpen) {
      document.addEventListener("keydown", handleKeyPress);
    }

    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [lightboxOpen]);

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

        {/* Enhanced Lightbox with Swipe Support */}
        {lightboxOpen && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <div
              className="lightbox-container"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
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
                  draggable={false}
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

                  {/* Navigation arrows */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        className="gallery-nav gallery-prev"
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                        aria-label="Previous image"
                      >
                        <FontAwesomeIcon icon="chevron-left" />
                      </button>
                      <button
                        className="gallery-nav gallery-next"
                        onClick={(e) => {
                          e.stopPropagation();
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
            {project.reportLink && (
              <button
                className="btn-report"
                onClick={() => handleExternalLink(project.reportLink)}
                style={{
                  background:
                    "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
                  color: "white",
                  padding: "12px 24px",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "all 0.3s ease",
                }}
              >
                <i className="fas fa-file-alt" aria-hidden="true"></i>
                View Research Report
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
