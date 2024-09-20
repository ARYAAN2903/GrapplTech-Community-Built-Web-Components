import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  const toggleMenu = () => {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
    const toggleButton = document.getElementById('navbarToggle');
    toggleButton.classList.toggle('active');
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="navbar-logo">
          <i className='fas fa-user-graduate' style={{ fontSize: '36px' }}></i> GrappleTech
        </a>
        <div className="navbar-toggle" id="navbarToggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className="navbar-menu" id="navMenu">
          <li><a href="#">Link1</a></li>
          <li><a href="#section2">Link2</a></li>
          <li><a href="#section3">Link3</a></li>
          <li><a href="#section4">Link4</a></li>
          <li><a href="#section5">Link5</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
