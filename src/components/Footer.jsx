import React from 'react';

const Footer = ({ data }) => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>{data.copyright}</p>
        <div className="footer-links">
          {data.links.map((link, index) => (
            <a key={index} href={link.link}>{link.text}</a>
          ))}
        </div>
                
      </div>
    </footer>
  );
};

export default Footer;