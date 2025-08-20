import React from 'react';
import './Slider.css'; // Assuming you have a CSS file for styling

const Slider: React.FC = () => {
    return (
        <div className="slider-container">
            <div className="slider">
                <div className="slide">
                    <img src="/images/slide1.jpg" alt="Luxury Product 1" />
                    <div className="slide-content">
                        <h2>Luxury Lipstick</h2>
                        <p>Experience the elegance of our new collection.</p>
                    </div>
                </div>
                <div className="slide">
                    <img src="/images/slide2.jpg" alt="Luxury Product 2" />
                    <div className="slide-content">
                        <h2>Premium Foundation</h2>
                        <p>Achieve a flawless look with our premium formula.</p>
                    </div>
                </div>
                <div className="slide">
                    <img src="/images/slide3.jpg" alt="Luxury Product 3" />
                    <div className="slide-content">
                        <h2>Elegant Eyeshadow</h2>
                        <p>Add a touch of glamour to your makeup routine.</p>
                    </div>
                </div>
            </div>
            <div className="slider-controls">
                <button className="prev">❮</button>
                <button className="next">❯</button>
            </div>
        </div>
    );
};

export default Slider;