import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faTrophy,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const HIGHLIGHTS = [
  {
    icon: faGraduationCap,
    text: "MSc Advanced Computer Science, QMUL (2026)",
  },
  { icon: faTrophy, text: "BSc Business Information Systems, 2:1 (2025)" },
  { icon: faUsers, text: "UEA Squash President (2025)" },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container about-layout">
        <header className="section-header" data-reveal>
          <h2 className="section-title">About Me</h2>
        </header>

        <div
          className="about-body"
          data-reveal
          style={{ "--reveal-delay": "100ms" }}
        >
          <p>
            I'm an incoming systems engineer and have completed an MSc in
            Advanced Computer Science at Queen Mary University of London,
            following a BSc in Business Information Systems. I enjoy building software that
            solves real problems, and measuring whether it actually works, from
            user-tested learning platforms to interpretable medical AI. Outside
            of work you'll find me on the squash court or playing guitar. As
            president of UEA's squash club in 2025, I learned to lead a team and
            make quick decisions under pressure, skills I bring to
            collaborative software projects.
          </p>

          <ul className="about-highlights">
            {HIGHLIGHTS.map((item) => (
              <li key={item.text}>
                <span className="about-highlight-icon">
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
