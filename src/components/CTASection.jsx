import React from 'react';

const CTASection = ({ data }) => {
  return (
    <section id="cta" className="cta-section">
      <div className="container">
        <h2>{data.headline}</h2>
        {data.subtext && <p className="cta-subtext">{data.subtext}</p>}
        <div className="hero-cta-buttons">
          <a href={data.cta1.link} className="cta-button">{data.cta1.text}</a>
          <a href={data.cta2.link} className="cta-button">{data.cta2.text}</a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;