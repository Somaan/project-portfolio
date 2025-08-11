// components/Projects.js - Enhanced Projects Showcase
// Features interactive project cards with advanced filtering and animations

import React, { useState, useEffect } from "react";

const Projects = () => {
  // State for managing which project details are expanded
  const [activeProject, setActiveProject] = useState(null);

  // State for technology filter
  const [selectedTech, setSelectedTech] = useState("All");

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
      liveDemo: null, // No live demo available
      githubRepo: "https://github.com/Somaan/SecurityQuest", // Add your actual repo
      imagePlaceholders: [
        {
          file: "/dashboard.png",
          description: "SecurityQuest Main Dashboard Interface",
          specific:
            "Screenshot Figure 23 from dissertation - shows welcome message, achievement notifications in top-right, progress tracking modules (Beginner/Intermediate/Advanced), and recent activity feed",
        },
        {
          file: "securityquest-architecture.png",
          description: "System Architecture Diagram",
          specific:
            "Use Figure 2 from dissertation - PERN Stack with LLM Integration showing client-side React, server-side Node.js/Express, PostgreSQL database, and Ollama LLM layer",
        },
        {
          file: "securityquest-results.png",
          description: "User Testing Results Chart",
          specific:
            "Screenshot Figure 75 from dissertation - Pre vs Post-Intervention Security Knowledge bar chart showing 52.2% average improvement across all categories",
        },
        {
          file: "securityquest-quiz.png",
          description: "Interactive Quiz Interface",
          specific:
            'Screenshot Figure 48 from dissertation - shows phishing email identification with clickable suspicious elements and "Beginner Quiz" interface',
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
      liveDemo: null, // No live demo available
      githubRepo: "https://github.com/Somaan/SquashHawkeye", // Add your actual repo
      imagePlaceholders: [
        {
          file: "squash-hawkeye-detection.png",
          description: "Ball Detection and Line Calling",
          specific:
            'Screenshot Figure 10 from Squash Hawkeye report - shows green circle around detected squash ball, red service line, and "IN" or "OUT" decision display',
        },
        {
          file: "squash-hawkeye-impact.png",
          description: "Impact Detection Example",
          specific:
            "Use Figure 4 from report - example impact screenshot showing ball position relative to service line during serve",
        },
        {
          file: "squash-hawkeye-setup.png",
          description: "Recording Setup and System",
          specific:
            "Screenshot Figure 5 from report - smartphone recording setup positioned on tripod with clear view of service box and front wall",
        },
        {
          file: "squash-hawkeye-output.png",
          description: "System Output Examples",
          specific:
            "Use multiple images from Figure 10 showing different edge cases - balls just above line (IN), balls crossing line (OUT), various challenging positions",
        },
      ],
    },
  ];

  // Get unique technologies for filtering
  const allTechnologies = [
    "All",
    ...new Set(projects.flatMap((project) => project.technologies)),
  ];

  // Filter projects based on selected technology
  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(selectedTech)
        );

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
  }, [filteredProjects]);

  // Toggle project details expansion
  const toggleProjectDetails = (projectId) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="projects-section section">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Innovative solutions combining AI, computer vision, and full-stack
          development to solve real-world problems
        </p>

        {/* Technology Filter */}
        <TechnologyFilter
          technologies={allTechnologies}
          selectedTech={selectedTech}
          onTechSelect={setSelectedTech}
        />

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isActive={activeProject === project.id}
              onToggle={toggleProjectDetails}
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
            <i className="fas fa-rocket" aria-hidden="true"></i>
            Let's Build Something Amazing
          </button>
        </div>
      </div>
    </section>
  );
};

// Technology Filter Component
const TechnologyFilter = ({ technologies, selectedTech, onTechSelect }) => {
  return (
    <div className="tech-filter">
      <h4 className="filter-title">
        <i className="fas fa-filter" aria-hidden="true"></i>
        Filter by Technology
      </h4>
      <div className="filter-buttons">
        {technologies.map((tech) => (
          <button
            key={tech}
            className={`filter-button ${selectedTech === tech ? "active" : ""}`}
            onClick={() => onTechSelect(tech)}
            aria-label={`Filter projects by ${tech}`}
          >
            {tech}
          </button>
        ))}
      </div>
    </div>
  );
};

// Enhanced Project Card Component
const ProjectCard = ({
  project,
  isActive,
  onToggle,
  isVisible,
  animationDelay,
}) => {
  const handleToggle = () => {
    onToggle(project.id);
  };

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
            <i className="fas fa-calendar-alt" aria-hidden="true"></i>
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
          className="expand-button"
          onClick={handleToggle}
          aria-expanded={isActive}
          aria-label={`${isActive ? "Hide" : "Show"} details for ${
            project.title
          }`}
        >
          <span>{isActive ? "Hide Details" : "Show Details"}</span>
          <i
            className={`fas fa-chevron-${isActive ? "up" : "down"}`}
            aria-hidden="true"
          ></i>
        </button>

        <div className="external-links">
          {project.githubRepo && (
            <button
              className="btn-secondary"
              onClick={() => handleExternalLink(project.githubRepo)}
              aria-label={`View ${project.title} on GitHub`}
            >
              <i className="fab fa-github" aria-hidden="true"></i>
              View Code
            </button>
          )}
          {project.liveDemo && (
            <button
              className="btn-primary"
              onClick={() => handleExternalLink(project.liveDemo)}
              aria-label={`View live demo of ${project.title}`}
            >
              <i className="fas fa-external-link-alt" aria-hidden="true"></i>
              Live Demo
            </button>
          )}
        </div>
      </div>

      {/* Expanded Project Details */}
      {isActive && (
        <ProjectDetails
          keyAchievements={project.keyAchievements}
          technicalHighlights={project.technicalHighlights}
          imagePlaceholders={project.imagePlaceholders}
        />
      )}
    </div>
  );
};

// Image Placeholders Component
const ImagePlaceholders = ({ imagePlaceholders }) => {
  return (
    <div className="project-images">
      <h4 className="images-title">
        <i className="fas fa-images" aria-hidden="true"></i>
        Visual Assets Needed
      </h4>

      <div className="images-grid">
        {imagePlaceholders.map((placeholder, index) => (
          <div key={index} className="image-placeholder">
            <div className="placeholder-box">
              <i className="fas fa-image" aria-hidden="true"></i>
              <div className="placeholder-content">
                <p className="placeholder-filename">{placeholder.file}</p>
                <p className="placeholder-description">
                  <strong>Description:</strong> {placeholder.description}
                </p>
                <p className="placeholder-specific">
                  <strong>Instructions:</strong> {placeholder.specific}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Project Details Component (Expanded Content)
const ProjectDetails = ({
  keyAchievements,
  technicalHighlights,
  imagePlaceholders,
}) => {
  return (
    <div className="project-details">
      {/* Image Placeholders Section */}
      <ImagePlaceholders imagePlaceholders={imagePlaceholders} />

      {/* Key Achievements Section */}
      <div className="achievements-section">
        <h4 className="details-title">
          <i className="fas fa-trophy" aria-hidden="true"></i>
          Key Achievements
        </h4>
        <ul className="achievements-list">
          {keyAchievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>

      {/* Technical Highlights Section */}
      <div className="technical-section">
        <h4 className="details-title">
          <i className="fas fa-cogs" aria-hidden="true"></i>
          Technical Implementation
        </h4>
        <ul className="technical-list">
          {technicalHighlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
