import { useState, useEffect } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  // State for managing which project modal is open
  const [activeModal, setActiveModal] = useState(null);

  // State for scroll animations
  const [visibleCards, setVisibleCards] = useState(new Set());

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
      { threshold: 0.1, rootMargin: "50px" },
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
          Solutions combining AI, computer vision, and full-stack
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

export default Projects;
