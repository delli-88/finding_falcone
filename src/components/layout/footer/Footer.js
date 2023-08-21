import React from 'react';
import './footer.css';

const Footer = () => {

  const footerContent = "Finding Falcone"

  return (
    <footer className={`footer`}>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} {footerContent}</p>
      </div>
    </footer>
  );
};

export default Footer;
