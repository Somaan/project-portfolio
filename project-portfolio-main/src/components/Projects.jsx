// components/Projects.js - Projects Showcase Component
// Features SecurityQuest and Squash Hawkeye projects with detailed information and image placeholders

import React, { useState } from "react";

const Projects = () => {
  // State for managing which project details are expanded
  const [activeProject, setActiveProject] = useState(null);

  // Project data from dissertation and reports - ALL REAL DATA
  const projects = [
    {
      id: "securityquest",
      title: "SecurityQuest - Gamified Cybersecurity Education Platform",
      subtitle: "Full-Stack Educational Platform with AI Integration",
      period: "2024-2025 (Final Year Project)",
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
        "Developed a comprehensive gamified platform addressing human vulnerability to social engineering attacks through interactive learning experiences. Features AI-powered personalized feedback and comprehensive achievement systems.",
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
      imagePlaceholders: [
        {
          file: "securityquest-dashboard.png",
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
      title: "Squash Hawkeye - Multi-Modal Line-Calling System",
      subtitle: "Computer Vision & Audio Processing for Sports Officiating",
      period: "2024 (Ubiquitous Computing Assignment)",
      technologies: [
        "Python",
        "OpenCV",
        "Java",
        "FFmpeg",
        "HoughCircles",
        "Audio Processing",
      ],
      description:
        "Co-developed an innovative system integrating computer vision and audio processing to provide automated line-calling for squash service violations. Created cost-effective alternative to professional systems costing £60,000-£100,000.",
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

  // Toggle project details expansion
  const toggleProjectDetails = (projectId) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Innovative solutions combining software engineering, AI, computer
          vision, and cybersecurity
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isActive={activeProject === project.id}
              onToggle={toggleProjectDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Individual Project Card Component
const ProjectCard = ({ project, isActive, onToggle }) => {
  const handleToggle = () => {
    onToggle(project.id);
  };

  return (
    <div className="project-card">
      {/* Project Header */}
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-period">
          <i className="fas fa-calendar-alt" aria-hidden="true"></i>
          {project.period}
        </p>
      </div>

      {/* Technology Tags */}
      <div className="project-technologies">
        <h4 className="tech-title">
          <i className="fas fa-code" aria-hidden="true"></i>
          Technologies Used:
        </h4>
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

      {/* Image Placeholders Section */}
      <ImagePlaceholders imagePlaceholders={project.imagePlaceholders} />

      {/* Expand/Collapse Button */}
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

      {/* Expanded Project Details */}
      {isActive && (
        <ProjectDetails
          keyAchievements={project.keyAchievements}
          technicalHighlights={project.technicalHighlights}
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
        Visual Assets Needed:
      </h4>

      <div className="images-grid">
        {imagePlaceholders.map((placeholder, index) => (
          <div key={index} className="image-placeholder">
            <div className="placeholder-box">
              <i className="fas fa-image" aria-hidden="true"></i>
              <div className="placeholder-content">
                <p className="placeholder-filename">
                  <strong>File:</strong> {placeholder.file}
                </p>
                <p className="placeholder-description">
                  <strong>Description:</strong> {placeholder.description}
                </p>
                <p className="placeholder-specific">
                  <strong>Specific Instructions:</strong> {placeholder.specific}
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
const ProjectDetails = ({ keyAchievements, technicalHighlights }) => {
  return (
    <div className="project-details">
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
          Technical Highlights
        </h4>
        <ul className="technical-list">
          {technicalHighlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>

      {/* Performance Metrics (if applicable) */}
      <div className="metrics-section">
        <h4 className="details-title">
          <i className="fas fa-chart-line" aria-hidden="true"></i>
          Impact & Results
        </h4>
        <div className="metrics-grid">
          <div className="metric-item">
            <span className="metric-number">326</span>
            <span className="metric-label">Test Cases (100% Pass Rate)</span>
          </div>
          <div className="metric-item">
            <span className="metric-number">52.2%</span>
            <span className="metric-label">
              Improvement in Security Awareness
            </span>
          </div>
          <div className="metric-item">
            <span className="metric-number">82%</span>
            <span className="metric-label">Accuracy in Edge Cases</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
