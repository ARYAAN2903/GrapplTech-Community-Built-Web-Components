import React from 'react';
import './About.css'; // Adjust the path as necessary
import companyImage from '../../assets/images/community.png'; // Adjust the path to your image

const About = () => {
    return (
        <section className="About">
            <div className="main">
                {/* Image for the company */}
                <img src={companyImage} alt="Company" className="company-image" />
                <div className="About-text">
                    <h2 id="section2">About Our Company</h2>
                    <p>
                    We welcome your passion and creativity! Please fill out the application form below so that our team can reach out to you. By participating in this initiative, you will gain valuable experience, and we will recognize your efforts with a certificate that you can proudly add to your resume and coursework.

The main advantage of this contribution is that it is considered as an internship experience, allowing you to receive a certificate upon completion. This certificate can be a valuable addition to your resume and coursework, showcasing your skills and dedication. Ready to make an impact? Apply now and become a part of the GrapplTech community!
                    </p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeGuxfZfO6mO5DwxafC5QyL12QIfEkJ6p1YTnhM6hN0AgYeVQ/viewform">
                        Click here to apply
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
