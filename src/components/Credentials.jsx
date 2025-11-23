import React from 'react';

const Credentials = ({ data }) => {
  return (
    <section className="credentials">
      <div className="container">
        {/* <h3 className="credentials-title">{data.title}</h3> */}
        <div className="logos-container">
          {data.logos.map((logo, index) => (
            <div key={index} className="credential-item">
              <img src={import.meta.env.BASE_URL + logo.url} width="100" height="100" alt={logo.name} className="client-logo" />
              {logo.quote && <p className="credential-quote">"{logo.quote}"</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;