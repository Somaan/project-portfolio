import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faExternalLinkAlt,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Project card shown in the Projects grid
const ProjectCard = ({ project, onOpenModal, revealDelay }) => {
  return (
    <article
      className="project-card"
      data-reveal
      style={{ "--reveal-delay": `${revealDelay}ms` }}
    >
      <header className="project-header">
        <span className="project-category">{project.category}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
      </header>

      <div className="project-metrics">
        {project.keyMetrics.map((metric) => (
          <div key={metric.label} className="metric">
            <span className="metric-value">{metric.value}</span>
            <span className="metric-label">{metric.label}</span>
            <span className="metric-description">{metric.description}</span>
          </div>
        ))}
      </div>

      <p className="project-description">{project.description}</p>

      <ul className="tech-tags" aria-label="Technologies">
        {project.technologies.map((tech) => (
          <li key={tech} className="tech-tag">
            {tech}
          </li>
        ))}
      </ul>

      <div className="project-actions">
        <button
          className="btn btn-primary"
          onClick={() => onOpenModal(project.id)}
          aria-label={`View detailed information about ${project.title}`}
        >
          View Project Details
          <FontAwesomeIcon icon={faArrowRight} />
        </button>

        <div className="project-links">
          {project.githubRepo && (
            <a
              className="text-link"
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
              View Code
            </a>
          )}
          {project.reportLink && (
            <a
              className="text-link"
              href={project.reportLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFileAlt} />
              View Research Report
            </a>
          )}
          {project.liveDemo && (
            <a
              className="text-link"
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
