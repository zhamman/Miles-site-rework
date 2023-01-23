import React from "react";
import Header from "../components/Header";
import "../Styles/Contact.scss";

const ContactPage = () => {
  return (
    <div className="contact-container" id="contact">
      <Header />
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
          <p className="p2">Aavailable for freelance work!</p>
          <a href="mailto: milesmazel@gmail.com" className="p3">
            milesmazel@gmail.com
          </a>
        </div>
      </div>
      <div className="socials-container">
        <div className="socials">
          <ul>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">LinkedIn</a>
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

export default ContactPage;
