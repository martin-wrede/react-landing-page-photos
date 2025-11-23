import React from 'react';

const FAQ = ({ data }) => {
  return (
    <section className="faq">
      <div className="container">
        <h2>{data.title}</h2>
        <div className="faq-list">
          {data.items.map((item, index) => (
            <div key={index} className="faq-item">
              <h4>{item.question}</h4>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;