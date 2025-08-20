import React from 'react';
import './FeaturesSection.css'; // Importing CSS for styling

const features = [
  {
    title: 'Luxury Ingredients',
    description: 'Our products are crafted with the finest ingredients sourced from around the world.',
    icon: '✨', // Placeholder for luxury icon
  },
  {
    title: 'Elegant Packaging',
    description: 'Experience beauty in every detail with our sophisticated and eco-friendly packaging.',
    icon: '📦', // Placeholder for packaging icon
  },
  {
    title: '3D Experience',
    description: 'Explore our products in stunning 3D with interactive effects that bring them to life.',
    icon: '🌟', // Placeholder for 3D effect icon
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Discover Our Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;