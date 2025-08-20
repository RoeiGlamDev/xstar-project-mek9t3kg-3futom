import { useEffect, useState } from 'react';

const useParallax = (scrollSpeed: number) => {
  const [offset, setOffset] = useState(0);

  const handleScroll = () => {
    const newOffset = window.scrollY * scrollSpeed; // Calculate new offset based on scroll speed
    setOffset(newOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup listener on unmount
    };
  }, []);

  return offset; // Return the calculated offset
};

export default useParallax;