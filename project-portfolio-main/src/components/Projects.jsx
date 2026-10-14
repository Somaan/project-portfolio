import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  // Id of the project whose details modal is open
  const [activeModal, setActiveModal] = useState(null);

  const activeProject = projects.find((p) => p.id === activeModal);

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <header className="section-header" data-reveal>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            From full-stack platforms to deep learning research and
            probabilistic modelling
          </p>
        </header>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={setActiveModal}
              revealDelay={(index % 2) * 100}
            />
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveModal(null)}
        />
      )}
    </section>
  );
};

export default Projects;
