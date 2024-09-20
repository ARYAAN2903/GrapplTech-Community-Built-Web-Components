import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-first">
          <h1>GrappleTech</h1> {/* Replace with actual company name */}
          <h3>Contact Info: email@grappletech.com</h3> {/* Replace with actual email */}
        </div>
      </div>
      <div className="footer-rights">
        Copyright &#169; www.grappletech.com | All rights reserved {/* Replace with actual website */}
      </div>
    </footer>
  );
};

export default Footer;
