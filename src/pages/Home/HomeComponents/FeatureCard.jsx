import React from 'react';
import './FeatureCard.css';

function FeatureCard({ feature }) {
  return (
    <article className="feature-card">
      <div className="feature-icon">
        {feature.icon && <img src={feature.icon} alt={feature.title} />}
      </div>
      <h3 className="feature-title">{feature.title}</h3>
      <p className="feature-description">{feature.description}</p>
    </article>
  );
}

export default FeatureCard;