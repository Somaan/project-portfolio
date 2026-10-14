import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faExternalLinkAlt,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Code and report links are always shown so every card has the same
// actions; until a URL is added in data/projects.js the link is disabled.
const ProjectLink = ({ url, icon, children }) => {
  if (!url) {
    return (
      <span
        className="text-link is-disabled"
        aria-disabled="true"
        title="Coming soon"
      >
        <FontAwesomeIcon icon={icon} />
        {children}
      </span>
    );
  }

  return (
    <a
      className="text-link"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={icon} />
      {children}
    </a>
  );
};

// Project card shown in the Projects grid
const ProjectCard = ({ project, onOpenModal, revealDelay }) => {
  return (
    <article
      className="project-card"
      data-reveal
      style={{ "--reveal-delay": `${revealDelay}ms` }}
    >
      <header className="project-header">
        <div className="project-tags">
          <span className="project-category">{project.category}</span>
          {project.label && (
            <strong className="project-label">{project.label}</strong>
          )}
        </div>
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
          <ProjectLink url={project.githubRepo} icon={faGithub}>
            View Code
          </ProjectLink>
          <ProjectLink url={project.reportLink} icon={faFileAlt}>
            View Research Report
          </ProjectLink>
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
