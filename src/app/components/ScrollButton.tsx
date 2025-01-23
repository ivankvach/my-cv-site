'use client';

import { useEffect, useState } from 'react';

const ScrollButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // Remove the hash from the URL
    if (window.location.hash) {
      history.pushState(null, '', window.location.pathname);
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 p-3 rounded-full bg-blue-500 text-white shadow-lg transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } hover:bg-blue-700`}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

export default ScrollButton;
