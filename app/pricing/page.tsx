import React from 'react';
import './PricingPage.css'; // Importing CSS for styling

const PricingPage: React.FC = () => {
    return (
        <div className="pricing-page">
            <header className="pricing-header">
                <h1 className="title">GlamCS Pricing</h1>
                <p className="subtitle">Luxury Cosmetics for Every Occasion</p>
            </header>
            <section className="pricing-options">
                <div className="pricing-card">
                    <h2 className="card-title">Basic Package</h2>
                    <p className="card-price">$29.99</p>
                    <p className="card-description">Perfect for everyday glam.</p>
                    <button className="card-button">Choose Plan</button>
                </div>
                <div className="pricing-card">
                    <h2 className="card-title">Premium Package</h2>
                    <p className="card-price">$59.99</p>
                    <p className="card-description">Elevate your beauty routine.</p>
                    <button className="card-button">Choose Plan</button>
                </div>
                <div className="pricing-card">
                    <h2 className="card-title">Luxury Package</h2>
                    <p className="card-price">$99.99</p>
                    <p className="card-description">Indulge in the ultimate glam experience.</p>
                    <button className="card-button">Choose Plan</button>
                </div>
            </section>
            <footer className="pricing-footer">
                <p>Join GlamCS today and elevate your beauty!</p>
            </footer>
        </div>
    );
};

export default PricingPage;