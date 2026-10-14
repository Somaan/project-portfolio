// Contact section: contact links and email

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faDownload,
  faEnvelope,
  faMapMarkerAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "../utils/links";

const CONTACT_INFO = [
  {
    id: "email",
    icon: faEnvelope,
    title: "Email",
    value: EMAIL,
    link: `mailto:${EMAIL}`,
    description: "Best way to reach me",
  },
  {
    id: "github",
    icon: faGithub,
    title: "GitHub",
    value: "github.com/Somaan",
    link: GITHUB_URL,
    external: true,
    description: "View my code repositories",
  },
  {
    id: "linkedin",
    icon: faLinkedin,
    title: "LinkedIn",
    value: "Connect with me",
    link: LINKEDIN_URL,
    external: true,
    description: "Professional networking",
  },
  {
    id: "location",
    icon: faMapMarkerAlt,
    title: "Location",
    value: "London, United Kingdom",
    link: null,
    description: "Available for remote & on-site work",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <header className="section-header" data-reveal>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Ready to collaborate on innovative projects or discuss exciting
            opportunities
          </p>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${EMAIL}`}>
              <FontAwesomeIcon icon={faPaperPlane} />
              Get In Touch
            </a>
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
        </header>

        <ul className="contact-grid">
          {CONTACT_INFO.map((contact, index) => (
            <li
              key={contact.id}
              data-reveal
              style={{ "--reveal-delay": `${index * 70}ms` }}
            >
              <ContactCard contact={contact} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// A single contact card; rendered as a link when the contact has one
const ContactCard = ({ contact }) => {
  const content = (
    <>
      <span className="contact-card-icon">
        <FontAwesomeIcon icon={contact.icon} />
      </span>
      <span className="contact-card-text">
        <span className="contact-card-title">{contact.title}</span>
        <span className="contact-card-value">{contact.value}</span>
        <span className="contact-card-description">
          {contact.description}
        </span>
      </span>
      {contact.link && (
        <FontAwesomeIcon icon={faArrowRight} className="contact-card-arrow" />
      )}
    </>
  );

  if (!contact.link) {
    return <div className="contact-card">{content}</div>;
  }

  return (
    <a
      className="contact-card is-link"
      href={contact.link}
      {...(contact.external && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
    >
      {content}
    </a>
  );
};

export default Contact;
