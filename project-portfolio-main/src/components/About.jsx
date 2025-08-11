// components/About.js - About Section Component
// Contains education, skills, work experience, and leadership information

import React from "react";

const About = () => {
  // Education data from academic transcript and CV
  const educationData = [
    {
      institution: "Queen Mary University of London",
      degree: "MSc Advanced Computer Science",
      period: "2025-2026",
      focus: "Software and Data Engineering",
      status: "In Progress",
      modules: [
        "Machine Learning",
        "Security & Authentication",
        "Data Analytics",
        "Bayesian Decision & Risk Analysis",
      ],
    },
    {
      institution: "University of East Anglia",
      degree: "BSc Business Information Systems",
      period: "2022-2025",
      grade: "2:1 (Second Class Honours, Division One)",
      gpa: "3.75 GPA",
      weightedAverage: "67.70%",
      modules: [
        "Systems Engineering (85.80%)",
        "Computing Project (80.38%)",
        "Ubiquitous Computing (73.55%)",
        "Networks (65.70%)",
        "Systems Analysis (65.30%)",
        "Introduction to Cyber Security (58.90%)",
      ],
    },
  ];

  // Technical skills organized by category from CV
  const technicalSkills = {
    "Programming Languages": [
      "JavaScript",
      "Python",
      "SQL",
      "Java",
      "HTML/CSS",
    ],
    "Technologies & Frameworks": [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "OpenCV",
    ],
    "System Architecture": [
      "Three-tier Design",
      "Database Architecture",
      "API Development",
      "RESTful APIs",
    ],
    "Tools & Testing": [
      "Git/GitHub",
      "VS Code",
      "Jest",
      "Unit/Integration Testing",
      "Database Design",
    ],
  };

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          {/* Introduction */}
          <div className="about-intro">
            <p className="about-description">
              I'm a dedicated software engineer with a strong foundation in
              business information systems and currently advancing my expertise
              through an MSc in Advanced Computer Science. My work spans from
              building secure authentication systems to developing innovative
              AI-powered educational platforms and computer vision applications.
              With a 2:1 honours degree and experience in multi-tier system
              architecture, I bring both technical depth and practical
              leadership skills to every project.
            </p>
          </div>

          {/* Education Section */}
          <EducationSection educationData={educationData} />

          {/* Technical Skills Section */}
          <SkillsSection technicalSkills={technicalSkills} />

          {/* Work Experience Section */}
          <ExperienceSection />

          {/* Leadership Section */}
          <LeadershipSection />
        </div>
      </div>
    </section>
  );
};

// Education Section Component
const EducationSection = ({ educationData }) => {
  return (
    <div className="education-section">
      <h3 className="subsection-title">
        <i className="fas fa-graduation-cap" aria-hidden="true"></i>
        Education
      </h3>
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <h4 className="education-degree">{edu.degree}</h4>
              <span className="education-period">{edu.period}</span>
            </div>

            <p className="education-institution">
              <i className="fas fa-university" aria-hidden="true"></i>
              {edu.institution}
            </p>

            {edu.grade && (
              <p className="education-grade">
                <strong>Grade:</strong> {edu.grade}
              </p>
            )}

            {edu.gpa && (
              <p className="education-gpa">
                <strong>GPA:</strong> {edu.gpa} |{" "}
                <strong>Weighted Average:</strong> {edu.weightedAverage}
              </p>
            )}

            {edu.focus && (
              <p className="education-focus">
                <strong>Specialization:</strong> {edu.focus}
              </p>
            )}

            {edu.status && (
              <p className="education-status">
                <strong>Status:</strong> {edu.status}
              </p>
            )}

            <div className="education-modules">
              <p>
                <strong>Key Modules:</strong>
              </p>
              <div className="module-tags">
                {edu.modules.map((module, moduleIndex) => (
                  <span key={moduleIndex} className="module-tag">
                    {module}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Skills Section Component
const SkillsSection = ({ technicalSkills }) => {
  return (
    <div className="skills-section">
      <h3 className="subsection-title">
        <i className="fas fa-tools" aria-hidden="true"></i>
        Technical Skills
      </h3>
      <div className="skills-grid">
        {Object.entries(technicalSkills).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h4 className="skill-category-title">
              <i className="fas fa-cog" aria-hidden="true"></i>
              {category}
            </h4>
            <div className="skill-tags">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Work Experience Section Component
const ExperienceSection = () => {
  return (
    <div className="experience-section">
      <h3 className="subsection-title">
        <i className="fas fa-briefcase" aria-hidden="true"></i>
        Work Experience
      </h3>
      <div className="experience-item">
        <div className="experience-header">
          <h4 className="experience-title">Assistant Manager</h4>
          <span className="experience-period">2020 - Present</span>
        </div>

        <p className="experience-company">
          <i className="fas fa-building" aria-hidden="true"></i>
          Hitchin Lavender Farm
        </p>

        <ul className="experience-responsibilities">
          <li>
            <strong>Team Leadership:</strong> Managing and scheduling a diverse
            team of 50 employees, fostering an inclusive environment and
            improving team cohesion
          </li>
          <li>
            <strong>Operational Efficiency:</strong> Applied analytical thinking
            to workforce scheduling, reducing overtime costs by 10% through
            improved resource allocation
          </li>
          <li>
            <strong>Problem Solving:</strong> Developed advanced problem-solving
            skills managing complex operational challenges in fast-paced
            environment
          </li>
          <li>
            <strong>Cross-functional Collaboration:</strong> Collaborated with
            cross-functional teams to streamline operations and enhance service
            delivery standards
          </li>
        </ul>
      </div>
    </div>
  );
};

// Leadership Section Component
const LeadershipSection = () => {
  return (
    <div className="leadership-section">
      <h3 className="subsection-title">
        <i className="fas fa-users" aria-hidden="true"></i>
        Leadership & Activities
      </h3>
      <div className="leadership-item">
        <div className="leadership-header">
          <h4 className="leadership-title">Squash Club President</h4>
          <span className="leadership-period">2022-2025</span>
        </div>

        <p className="leadership-organization">
          <i className="fas fa-university" aria-hidden="true"></i>
          University of East Anglia
        </p>

        <ul className="leadership-responsibilities">
          <li>
            <strong>Event Organization:</strong> Organised training sessions,
            tournaments, and inter-university competitions
          </li>
          <li>
            <strong>Team Management:</strong> Managed team dynamics and
            represented club interests to university committee
          </li>
          <li>
            <strong>Strategic Planning:</strong> Developed long-term strategies
            for club growth and member engagement
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
