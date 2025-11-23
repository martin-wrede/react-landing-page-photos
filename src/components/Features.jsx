import React from 'react';

const Features = ({ data }) => {
  return (
    <section className="features">
      <div className="container">
        <h2>{data.title}</h2>
        {data.items.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-text">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
            <div className="feature-image-container">
              <img src={import.meta.env.BASE_URL + feature.imageUrl} alt={feature.title} className="feature-image" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;