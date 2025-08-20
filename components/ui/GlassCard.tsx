import React from 'react';
import './GlassCard.css'; // Importing CSS for styling

const GlassCard: React.FC<{ title: string; description: string; imageUrl: string }> = ({ title, description, imageUrl }) => {
    return (
        <div className="glass-card">
            <img src={imageUrl} alt={title} className="glass-card-image" />
            <div className="glass-card-content">
                <h3 className="glass-card-title">{title}</h3>
                <p className="glass-card-description">{description}</p>
            </div>
        </div>
    );
};

export default GlassCard;