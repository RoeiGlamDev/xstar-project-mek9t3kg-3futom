import React from 'react';
import './TestimonialsSection.css'; // Importing CSS for styling

const testimonials = [
  {
    name: "Sophia Turner",
    feedback: "GlamCS has transformed my beauty routine. The products are luxurious and effective!",
    image: "/images/testimonial1.jpg", // Path to image
  },
  {
    name: "Liam Smith",
    feedback: "I love the elegant packaging and the high-quality formulas. Truly a premium experience!",
    image: "/images/testimonial2.jpg", // Path to image
  },
  {
    name: "Olivia Johnson",
    feedback: "The 3D designs and textures are stunning. GlamCS is a game changer in cosmetics!",
    image: "/images/testimonial3.jpg", // Path to image
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-feedback">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;