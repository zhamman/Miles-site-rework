import React from "react";
import { Link } from "react-router-dom";
import "../Styles/About.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About me</h1>
        <div className="about-description">
          <p>
            I am Miles Mazel, a freelance photographer from Vermont specializing
            in event, landscape, and portrait photography. With a keen eye for
            detail and a passion for capturing meaningful moments, I bring a
            unique vision to each project. Currently based in New York, I am
            open to inquiries and collaborations that go beyond geographical
            boundaries. Let's work together to transform your vision into
            unforgettable imagery that leaves a lasting impression.{" "}
            <Link to="/contact" className="link">
              {" "}
              Contact
            </Link>{" "}
            me to discuss your upcoming projects or explore my portfolio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
