// Fixed top navigation with section links and a mobile menu toggle

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

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo/Brand */}
        <div className="nav-logo">
          <button
            className="nav-logo-button"
            onClick={() => handleNavClick("home")}
            aria-label="Back to top"
          >
            Somaan Mirza
          </button>
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
        </div>

        {/* Mobile Menu Toggle (Hamburger) */}
        <button
          className={`nav-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
