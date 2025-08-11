// App.js - Main Application Component
// This is the root component that handles routing and global state

import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
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
      const sections = ["home", "about", "projects", "contact"];
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

      {/* Main content sections */}
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
