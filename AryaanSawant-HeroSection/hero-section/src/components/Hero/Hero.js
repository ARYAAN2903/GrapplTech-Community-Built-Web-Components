import React from 'react';
import './Hero.css'; // Adjust the path as necessary
import profileImage from '../../assets/images/bg.png'; // Company logo or relevant image

const Hero = () => {
    return (
        <div className="content">
            <img src={profileImage} alt="Company Logo" className="hero-image" />
            <h1>Welcome to <span className="purple">GrappleTech!</span></h1>
            <h3>Your Gateway to Landing the Perfect Bootcamps!</h3>
            <p>GrapplTech is the ultimate platform for students and recent graduates to find bootcamps across a wide range of industries. Our platform connects aspiring grapplers with top companies, offering them invaluable experience, skills, and contacts to jumpstart their careers.</p>
            <a className="btn" href="https://www.grappl.tech/bootcamps">Explore Our Services</a>
        </div>
    );
};

export default Hero;
