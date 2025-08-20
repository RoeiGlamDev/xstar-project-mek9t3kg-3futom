import React from 'react';
import './HeroSection.css'; // Importing CSS for styling

const HeroSection: React.FC = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">Elevate Your Beauty</h1>
                <p className="hero-subtitle">Discover the luxury of GlamCS cosmetics</p>
                <button className="hero-button">Shop Now</button>
            </div>
            <div className="hero-image">
                <img src="/path/to/your/image.jpg" alt="Luxury Cosmetics" /> {/* Add your image path */}
            </div>
        </div>
    );
};

export default HeroSection;