import React from "react";
import "../Styles/MainPage.scss";

const MainPage = () => {
  return (
    <div className="main-container">
      <div className="home-container">
        <div className="home-image">
          <img src="../Images/miles-smoke.png" alt="" />
          <div className="description">
            <div className="name">New York</div>
            <div className="occupation">Photography </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
