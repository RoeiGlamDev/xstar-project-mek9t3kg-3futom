import React from 'react';
import './StatsSection.css'; // Importing CSS for styling

const StatsSection: React.FC = () => {
    return (
        <section className="stats-section">
            <div className="stats-container">
                <div className="stat-item">
                    <h2 className="stat-number">500+</h2>
                    <p className="stat-description">Products Sold</p>
                </div>
                <div className="stat-item">
                    <h2 className="stat-number">1000+</h2>
                    <p className="stat-description">Happy Customers</p>
                </div>
                <div className="stat-item">
                    <h2 className="stat-number">10+</h2>
                    <p className="stat-description">Years of Experience</p>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;