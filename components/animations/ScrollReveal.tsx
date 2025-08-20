'use client';

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealComponent: React.FC = ({ children }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom', // Animation origin
      distance: '50px', // Distance of the reveal
      duration: 1000, // Animation duration
      delay: 200, // Delay before animation starts
      easing: 'ease-in-out', // Easing function
      reset: true, // Reset animation on scroll back
    });

    sr.reveal('.scroll-reveal', { interval: 100 }); // Reveal elements with class 'scroll-reveal'
  }, []);

  return <div className="scroll-reveal">{children}</div>; // Render children with scroll reveal
};

export default ScrollRevealComponent;