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
  { icon: faTrophy, text: "BSc Business Information Systems (2:1)" },
  { icon: faUsers, text: "UEA Squash President" },
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
            Having completed a Masters in Computer Science, I'm passionate about
            software development and systems engineering, with expertise in
            building secure, scalable systems that solve real-world problems. I
            believe in creating technology that makes a measurable impact. When
            I'm not coding, you'll find me on the squash court or playing
            guitar. Squash has taught me strategy and quick decision-making. As
            Squash Club President, I've developed leadership and team-building
            skills that enhance my collaborative approach to software
            development.
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
