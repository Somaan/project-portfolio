// Fixed top navigation with section links and a mobile menu toggle

const NAV_ITEMS = [
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const Navigation = ({
  activeSection,
  scrollToSection,
  isMenuOpen,
  setIsMenuOpen,
  isScrolled,
}) => {
  return (
    <nav className={`navbar ${isScrolled || isMenuOpen ? "is-scrolled" : ""}`}>
      <div className="nav-container">
        <button
          className="nav-logo"
          onClick={() => scrollToSection("home")}
          aria-label="Somaan Mirza, back to top"
        >
          {/* Same artwork as the favicon so the two always match */}
          <img src="/favicon.svg" alt="" width="36" height="36" />
        </button>

        <ul
          id="nav-menu"
          className={`nav-menu ${isMenuOpen ? "is-open" : ""}`}
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link ${
                  activeSection === item.id ? "is-active" : ""
                }`}
                onClick={() => scrollToSection(item.id)}
                aria-current={activeSection === item.id ? "true" : undefined}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={`nav-toggle ${isMenuOpen ? "is-open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
        >
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
