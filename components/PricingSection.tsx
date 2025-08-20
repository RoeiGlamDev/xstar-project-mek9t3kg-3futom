import React from 'react';
import './PricingSection.css'; // Assuming a CSS file for styling

const PricingSection: React.FC = () => {
    return (
        <section className="pricing-section">
            <div className="container">
                <h2 className="pricing-title">Luxury Pricing Plans</h2>
                <div className="pricing-cards">
                    <div className="pricing-card">
                        <h3 className="card-title">Basic</h3>
                        <p className="card-price">$29/month</p>
                        <ul className="card-features">
                            <li>Premium Quality Products</li>
                            <li>24/7 Customer Support</li>
                            <li>Exclusive Discounts</li>
                        </ul>
                        <button className="card-button">Choose Plan</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Standard</h3>
                        <p className="card-price">$49/month</p>
                        <ul className="card-features">
                            <li>All Basic Features</li>
                            <li>Free Shipping</li>
                            <li>Monthly Gifts</li>
                        </ul>
                        <button className="card-button">Choose Plan</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Premium</h3>
                        <p className="card-price">$99/month</p>
                        <ul className="card-features">
                            <li>All Standard Features</li>
                            <li>Personalized Consultations</li>
                            <li>VIP Access to New Products</li>
                        </ul>
                        <button className="card-button">Choose Plan</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;