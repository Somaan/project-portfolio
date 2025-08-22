// components/Navigation.js - Modern Navigation with Enhanced Dark/Light Mode Toggle
// Handles navigation with glassmorphism design and improved theme switching

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = ({
  activeSection,
  scrollToSection,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const [currentTheme, setCurrentTheme] = useState("dark");

  // Navigation items configuration
  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Handle navigation item click
  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    // Close mobile menu after navigation
    setIsMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Enhanced theme toggle functionality
  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setCurrentTheme(newTheme);
  };

  // Set initial theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    document.documentElement.setAttribute("data-theme", initialTheme);
    setCurrentTheme(initialTheme);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".navbar")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, setIsMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo/Brand */}
        <div className="nav-logo">
          <h2 onClick={() => handleNavClick("home")} role="button" tabIndex={0}>
            SM Designs
          </h2>
        </div>

        {/* Navigation Content */}
        <div className="nav-content">
          {/* Navigation Menu */}
          <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  className={`nav-link ${
                    activeSection === item.id ? "active" : ""
                  }`}
                  onClick={() => handleNavClick(item.id)}
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Enhanced Theme Toggle Button */}
          <button
            className="theme-toggle enhanced"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              currentTheme === "dark" ? "light" : "dark"
            } mode`}
            title={`Switch to ${
              currentTheme === "dark" ? "light" : "dark"
            } mode`}
          >
            <div className="theme-toggle-content">
              {currentTheme === "dark" ? (
                <>
                  <FontAwesomeIcon icon="sun" className="theme-icon sun-icon" />
                  <span className="theme-label">Light</span>
                </>
              ) : (
                <>
                  <FontAwesomeIcon
                    icon="moon"
                    className="theme-icon moon-icon"
                  />
                  <span className="theme-label">Dark</span>
                </>
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu Toggle (Hamburger) */}
        <div
          className={`nav-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              toggleMobileMenu();
            }
          }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="nav-overlay" onClick={() => setIsMenuOpen(false)} />
      )}
    </nav>
  );
};

export default Navigation;
