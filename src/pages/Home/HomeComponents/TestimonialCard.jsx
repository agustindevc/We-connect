import React from 'react';
import './TestimonialCard.css';

function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-image">
        {testimonial.image && <img src={testimonial.image} alt={testimonial.name} />}
      </div>
      <blockquote className="testimonial-quote">
        <p>{testimonial.quote}</p>
      </blockquote>
      <h4 className="testimonial-name">{testimonial.name}</h4>
      <p className="testimonial-role">{testimonial.role}</p>
    </article>
  );
}

export default TestimonialCard;