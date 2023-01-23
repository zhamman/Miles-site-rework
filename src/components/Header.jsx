import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import gsap from "gsap";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [menuStatus, setMenuStatus] = useState("MENU");

  let menu = useRef(null);

  const changeMobileStatus = () => {
    if (menuStatus === "MENU") {
      setMenuStatus("CLOSE");
    } else if (menuStatus === "CLOSE") {
      setMenuStatus("MENU");
    }
  };

  useEffect(() => {
    if (menuStatus === "CLOSE") {
      gsap.from(menu, {
        y: "-700",
        duration: 0.6,
        ease: "power3.inOut",
      });
    }
  }, [menuStatus]);

  return (
    <header>
      <div className="container">
        <div className="header-container">
          <div style={{ zIndex: 10 }} className="logo">
            <Link to="/">MILES MAZEL</Link>
          </div>
          <ul className="nav-links">
            <Link to="/" className="link">
              <div className="mask">
                <div className="link-container">
                  <span class="link-title1 title">1.Home</span>
                  <span class="link-title2 title">1.Home</span>
                </div>
              </div>
            </Link>
            <Link to="/gallery" className="link">
              <div className="mask">
                <div className="link-container">
                  <span class="link-title1 title">2.Gallery</span>
                  <span class="link-title2 title">2.Gallery</span>
                </div>
              </div>
            </Link>
            <Link to="/contact" className="link">
              <div className="mask">
                <div className="link-container">
                  <span class="link-title1 title">3.Contact</span>
                  <span class="link-title2 title">3.Contact</span>
                </div>
              </div>
            </Link>
          </ul>
          <div className="mobile-nav">
            <div
              className="mobile-menu-button"
              onClick={() => {
                setMobile(!mobile);
                changeMobileStatus();
              }}
              style={{
                letterSpacing: "1px",
                cursor: "pointer",
                position: "relative",
                zIndex: "100",
              }}
            >
              {menuStatus}
            </div>
            {menuStatus === "CLOSE" && (
              <div className="mobile-menu">
                <ul className="mobile-nav-links" ref={el => (menu = el)}>
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                  <Link to="/gallery" className="nav-link">
                    Gallery
                  </Link>
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
