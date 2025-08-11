// App.js - Main Application Component
// Modern project showcase portfolio with dark/light mode support

import React, { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendarAlt,
  faArrowRight,
  faExternalLinkAlt,
  faTimes,
  faChevronLeft,
  faChevronRight,
  faRocket,
  faTrophy,
  faCogs,
  faSearchPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(
  faCalendarAlt,
  faArrowRight,
  faExternalLinkAlt,
  faTimes,
  faChevronLeft,
  faChevronRight,
  faRocket,
  faTrophy,
  faCogs,
  faGithub,
  faSearchPlus
);
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./index.css";

const App = () => {
  // State for tracking which section is currently active (for navigation highlighting)
  const [activeSection, setActiveSection] = useState("home");

  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to handle scroll detection and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "contact"]; // Removed 'about'
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      // Check which section is currently in view
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;

          // Update active section if this section is in view
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section);
          }
        }
      });
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile menu after navigation
    setIsMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Navigation component with props for state management */}
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Main content sections - focused on projects */}
      <Hero scrollToSection={scrollToSection} />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
