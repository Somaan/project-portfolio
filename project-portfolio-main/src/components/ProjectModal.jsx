import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
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

// Project details modal with image gallery, lightbox and mobile swipe support
const ProjectModal = ({ project, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const closeButtonRef = useRef(null);

  // Touch handling for swipe gestures
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isSwipeActive, setIsSwipeActive] = useState(false);

  const images = project.images || [];
  const imageCount = images.length;
  const currentImage = images[selectedImageIndex];
  const titleId = `modal-title-${project.id}`;

  const openLightbox = (index = selectedImageIndex) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setIsSwipeActive(false);
  };

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

  // Lock page scroll while open, and return focus to the trigger on close
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  // Escape closes the lightbox first, then the modal; arrows move the lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (lightboxOpen) {
          setLightboxOpen(false);
          setIsSwipeActive(false);
        } else {
          onClose();
        }
        return;
      }

      if (!lightboxOpen) return;

      if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) =>
          prev === 0 ? imageCount - 1 : prev - 1,
        );
      } else if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) =>
          prev === imageCount - 1 ? 0 : prev + 1,
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, imageCount, onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="modal-header">
          <div>
            <span className="project-category">{project.category}</span>
            <h2 id={titleId} className="modal-title">
              {project.title}
            </h2>
            <p className="modal-subtitle">{project.subtitle}</p>
          </div>
          <button
            ref={closeButtonRef}
            className="icon-button"
            onClick={onClose}
            aria-label="Close project details"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </header>

        <div className="modal-body">
          {currentImage && (
            <div className="gallery">
              <div className="gallery-main">
                <button
                  className="gallery-image-button"
                  onClick={() => openLightbox(selectedImageIndex)}
                  aria-label={`Expand image: ${currentImage.alt}`}
                >
                  <img
                    src={currentImage.src}
                    alt={currentImage.alt}
                    className="gallery-image"
                  />
                  <span className="gallery-expand-hint">
                    <FontAwesomeIcon icon={faExpandArrowsAlt} />
                    Click to expand
                  </span>
                </button>

                {imageCount > 1 && (
                  <>
                    <button
                      className="gallery-nav gallery-prev"
                      onClick={prevImage}
                      aria-label="Previous image"
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button
                      className="gallery-nav gallery-next"
                      onClick={nextImage}
                      aria-label="Next image"
                    >
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </>
                )}
              </div>
              <p className="gallery-caption">{currentImage.caption}</p>

              {imageCount > 1 && (
                <div className="gallery-thumbnails">
                  {images.map((image, index) => (
                    <button
                      key={image.src}
                      className={`thumbnail ${
                        index === selectedImageIndex ? "is-active" : ""
                      }`}
                      onClick={() => setSelectedImageIndex(index)}
                      aria-label={`Show image ${index + 1}: ${image.alt}`}
                      aria-current={
                        index === selectedImageIndex ? "true" : undefined
                      }
                    >
                      <img src={image.src} alt="" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="modal-sections">
            <section className="modal-section">
              <h3 className="modal-section-title">
                <FontAwesomeIcon icon={faTrophy} />
                Key Achievements
              </h3>
              <ul className="detail-list">
                {project.keyAchievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </section>

            <section className="modal-section">
              <h3 className="modal-section-title">
                <FontAwesomeIcon icon={faCogs} />
                Technical Implementation
              </h3>
              <ul className="detail-list">
                {project.technicalHighlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {(project.githubRepo || project.reportLink || project.liveDemo) && (
          <footer className="modal-footer">
            {project.githubRepo && (
              <a
                className="btn btn-primary"
                href={project.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
                View on GitHub
              </a>
            )}
            {project.reportLink && (
              <a
                className="btn btn-primary"
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
                className="btn btn-secondary"
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                Live Demo
              </a>
            )}
          </footer>
        )}
      </div>

      {/* Lightbox renders into <body> so it always covers the full viewport */}
      {lightboxOpen &&
        currentImage &&
        createPortal(
          <div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={currentImage.alt}
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            <div
              className="lightbox-inner"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <button
                className="icon-button lightbox-close"
                onClick={closeLightbox}
                aria-label="Close image"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>

              {imageCount > 1 && (
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

              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="lightbox-image"
                draggable={false}
              />

              <div className="lightbox-caption">
                <p className="lightbox-caption-title">{currentImage.alt}</p>
                <p>{currentImage.caption}</p>
                {imageCount > 1 && (
                  <p className="lightbox-counter">
                    {selectedImageIndex + 1} / {imageCount}
                  </p>
                )}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};

export default ProjectModal;
