// components/Navigation.js - Modern Navigation with Dark/Light Mode Toggle
// Handles navigation with glassmorphism design and theme switching

import React from "react";

const Navigation = ({
  activeSection,
  scrollToSection,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  // Navigation items configuration
  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Handle navigation item click
  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Theme toggle functionality
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Set initial theme on component mount
  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo/Brand */}
        <div className="nav-logo">
          <h2 onClick={() => handleNavClick("home")}>Somaan Mirza</h2>
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

          {/* Theme Toggle Button */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            title="Toggle Theme"
          >
            <i className="fas fa-moon" aria-hidden="true"></i>
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
    </nav>
  );
};

export default Navigation;
