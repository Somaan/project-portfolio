import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faDownload } from "@fortawesome/free-solid-svg-icons";

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-name" data-reveal>
            Somaan Mirza
          </h1>
          <p
            className="hero-role"
            data-reveal
            style={{ "--reveal-delay": "80ms" }}
          >
            Incoming Systems Engineer
          </p>

          <p
            className="hero-description"
            data-reveal
            style={{ "--reveal-delay": "160ms" }}
          >
            MSc Advanced Computer Science graduate from Queen Mary University of
            London, specialising in Data & Software Engineering. Throughout
            academia, I have built software across the stack, from full-stack
            web platforms to machine learning and probabilistic models, with my
            MSc research focused on making deep learning explainable for ECG
            arrhythmia diagnosis.
          </p>

          <div
            className="hero-actions"
            data-reveal
            style={{ "--reveal-delay": "240ms" }}
          >
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
            {/* Disabled until an updated CV is added (see utils/links.js) */}
            <button
              className="btn btn-secondary"
              disabled
              title="Updated CV coming soon"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
