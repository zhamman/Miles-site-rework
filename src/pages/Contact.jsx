import React from "react";
import "../Styles/Contact.scss";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="section-container">
        <div className="first-section">
          <p>
            Let's <br />
            work <br />
            together!
          </p>
        </div>
        <div className="second-section">
          <p className="p1">want to collaborate? </p>
          <p className="p2">Available for freelance work!</p>
          <a href="mailto: milesmazel@gmail.com" className="p3">
            milesmazel@gmail.com
          </a>
        </div>
      </div>
      <div className="socials-container">
        <div className="socials">
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/photosbymiles/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
          <div className="initials">
            <p>Built by Zach Hamman</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
