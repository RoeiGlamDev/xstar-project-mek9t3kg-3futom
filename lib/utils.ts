import { useEffect, useState } from 'react';

// Function to format currency for display
export const formatCurrency = (amount: number): string => {
    return `$${amount.toFixed(2)}`; // Format as currency
};

// Hook to handle window resize events
export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowSize; // Return current window size
};

// Function to generate a unique ID
export const generateUniqueId = (): string => {
    return 'id-' + Math.random().toString(36).substr(2, 9); // Generate a unique ID
};

// Function to apply 3D effect styles
export const apply3DEffect = (element: HTMLElement) => {
    if (element) {
        element.style.transform = 'perspective(1000px) rotateY(10deg)'; // Example 3D effect
        element.style.transition = 'transform 0.3s ease'; // Smooth transition
    }
};

// Function to remove 3D effect styles
export const remove3DEffect = (element: HTMLElement) => {
    if (element) {
        element.style.transform = 'none'; // Reset to original state
    }
};

export default { formatCurrency, useWindowSize, generateUniqueId, apply3DEffect, remove3DEffect };