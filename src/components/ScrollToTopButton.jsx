import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    const headerElement = document.querySelector('header');
    if (headerElement) {
      headerElement.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#763fdb',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '1.5rem',
    lineHeight: '30px',
    padding: '8px 12px',
    textAlign: 'center',
    transition: 'opacity 0.3s ease-in-out, background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#535bf2'
    }
  };

  return (
    <div>
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          aria-label="Volver arriba"
          style={buttonStyle}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;