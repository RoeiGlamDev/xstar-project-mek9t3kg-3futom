import { useEffect, useState } from 'react';

const useScrollAnimation = () => {
  const [scrolling, setScrolling] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrolling(scrollPosition > 100); // Trigger animation after 100px scroll
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrolling; // Return the scrolling state
};

export default useScrollAnimation;