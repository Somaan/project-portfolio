// Main application component: navigation and page sections

import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useReveal from "./hooks/useReveal";

const SECTIONS = ["home", "projects", "about", "contact"];

const App = () => {
  // Section currently in view (for navigation highlighting)
  const [activeSection, setActiveSection] = useState("home");

  // Whether the page has scrolled past the top (nav gets a border)
  const [isScrolled, setIsScrolled] = useState(false);

  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useReveal();

  // Update the active section and nav style on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Offset for navbar height
      setIsScrolled(window.scrollY > 8);

      SECTIONS.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section);
          }
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to a section and close the mobile menu
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="app">
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isScrolled={isScrolled}
      />

      <main>
        <Hero scrollToSection={scrollToSection} />
        <Projects />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
