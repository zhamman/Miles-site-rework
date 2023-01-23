import React from "react";
import { Link } from "react-router-dom";
import "../Styles/About.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">Hello!</h1>
        <div className="about-description">
          <p>
            I'm Miles Mazel. A freelance photographer from Vermont, specialized
            in event, landscape and portrait Photography. <br />
            <Link to="/contact" className="link">
              {" "}
              Contact
            </Link>{" "}
            me for any inquiries.
          </p>
          <p>Currently living in New York.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
