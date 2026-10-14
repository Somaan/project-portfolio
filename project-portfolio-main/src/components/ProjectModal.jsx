import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCogs,
  faExpandArrowsAlt,
  faExternalLinkAlt,
  faFileAlt,
  faTimes,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { openExternal } from "../utils/links";

// Project details modal with image gallery, lightbox and mobile swipe support
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
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setIsSwipeActive(false);
  };

  const imageCount = project.images.length;

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev === imageCount - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? imageCount - 1 : prev - 1));
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

  // Keyboard navigation while the lightbox is open
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case "Escape":
          setLightboxOpen(false);
          setIsSwipeActive(false);
          break;
        case "ArrowLeft":
          setSelectedImageIndex((prev) =>
            prev === 0 ? imageCount - 1 : prev - 1,
          );
          break;
        case "ArrowRight":
          setSelectedImageIndex((prev) =>
            prev === imageCount - 1 ? 0 : prev + 1,
          );
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, imageCount]);

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
            <FontAwesomeIcon icon={faTimes} />
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
                <FontAwesomeIcon icon={faTimes} />
              </button>

              {/* Navigation arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    className="lightbox-nav lightbox-prev"
                    onClick={prevImage}
                    aria-label="Previous image"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <button
                    className="lightbox-nav lightbox-next"
                    onClick={nextImage}
                    aria-label="Next image"
                  >
                    <FontAwesomeIcon icon={faChevronRight} />
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
                      <FontAwesomeIcon icon={faExpandArrowsAlt} />
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
                        <FontAwesomeIcon icon={faChevronLeft} />
                      </button>
                      <button
                        className="gallery-nav gallery-next"
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                        aria-label="Next image"
                      >
                        <FontAwesomeIcon icon={faChevronRight} />
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
                <FontAwesomeIcon icon={faTrophy} />
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
                <FontAwesomeIcon icon={faCogs} />
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
                onClick={() => openExternal(project.githubRepo)}
              >
                <FontAwesomeIcon icon={faGithub} />
                View on GitHub
              </button>
            )}
            {project.reportLink && (
              <button
                className="btn-report"
                onClick={() => openExternal(project.reportLink)}
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
                <FontAwesomeIcon icon={faFileAlt} />
                View Research Report
              </button>
            )}
            {project.liveDemo && (
              <button
                className="btn-demo"
                onClick={() => openExternal(project.liveDemo)}
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                Live Demo
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
