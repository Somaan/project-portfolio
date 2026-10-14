import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faExternalLinkAlt,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { openExternal } from "../utils/links";

// Project card shown in the Projects grid
const ProjectCard = ({ project, onOpenModal, isVisible, animationDelay }) => {
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
          <FontAwesomeIcon icon={faArrowRight} />
        </button>

        {project.githubRepo && (
          <button
            className="project-button project-button-secondary"
            onClick={() => openExternal(project.githubRepo)}
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
            <FontAwesomeIcon icon={faGithub} />
            <span>View Code</span>
          </button>
        )}

        {project.reportLink && (
          <button
            className="project-button project-button-report"
            onClick={() => openExternal(project.reportLink)}
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
            <FontAwesomeIcon icon={faFileAlt} />
            <span>View Research Report</span>
          </button>
        )}

        {project.liveDemo && (
          <button
            className="project-button project-button-demo"
            onClick={() => openExternal(project.liveDemo)}
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
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            <span>Live Demo</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
