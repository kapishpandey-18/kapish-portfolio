import { useState, useEffect } from "react";

/**
 * Custom hook for detecting scroll position
 * @param {number} threshold - Scroll threshold in pixels
 * @returns {boolean} True if scrolled past threshold
 */
export const useScrollPosition = (threshold = 100) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
};
