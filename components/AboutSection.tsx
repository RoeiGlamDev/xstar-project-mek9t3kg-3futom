import React from 'react';
import './AboutSection.css'; // Assuming a CSS file for styling

const AboutSection: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h1 className="about-title">Welcome to GlamCS</h1>
                <p className="about-description">
                    Discover the elegance of our high-end cosmetics, designed for those who appreciate luxury and sophistication. 
                    Our products are crafted with the finest ingredients, ensuring a glamorous experience with every application.
                </p>
                <div className="about-3d-effect">
                    {/* Placeholder for 3D design effect */}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;