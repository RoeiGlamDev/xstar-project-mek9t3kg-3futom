import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Animation utility functions
const useAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  const fadeIn = () => {
    if (ref.current) {
      gsap.from(ref.current, { opacity: 0, duration: 1 });
    }
  };

  const slideIn = (direction: 'left' | 'right' | 'top' | 'bottom') => {
    if (ref.current) {
      const distance = direction === 'left' || direction === 'right' ? '100%' : '50px';
      const x = direction === 'left' ? -distance : direction === 'right' ? distance : 0;
      const y = direction === 'top' ? -distance : direction === 'bottom' ? distance : 0;
      gsap.from(ref.current, { x, y, opacity: 0, duration: 1 });
    }
  };

  const rotate = (angle: number) => {
    if (ref.current) {
      gsap.from(ref.current, { rotation: angle, duration: 1 });
    }
  };

  useEffect(() => {
    fadeIn(); // Initial fade-in effect
  }, []);

  return { ref, slideIn, rotate };
};

export default useAnimation;