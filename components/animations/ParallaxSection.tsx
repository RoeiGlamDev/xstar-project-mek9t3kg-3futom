import React from 'react';
import './ParallaxSection.css'; // Importing CSS for styling

const ParallaxSection: React.FC = () => {
  return (
    <div className="parallax-section">
      <div className="parallax-background" />
      <div className="parallax-content">
        <h1 className="title">Elevate Your Beauty</h1>
        <p className="description">
          Discover the elegance of GlamCS cosmetics, where luxury meets innovation.
        </p>
        <button className="cta-button">Shop Now</button>
      </div>
    </div>
  );
};

export default ParallaxSection;