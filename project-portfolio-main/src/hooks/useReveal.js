import { useEffect } from "react";

// Adds "is-visible" to every [data-reveal] element the first time it scrolls
// into view. The fade-up itself lives in index.css and is skipped entirely
// when the visitor prefers reduced motion.
const useReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
};

export default useReveal;
