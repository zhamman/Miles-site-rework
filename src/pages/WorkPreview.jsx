import React from "react";
import "../Styles/WorkPreview.scss";
import { Link } from "react-router-dom";

const WorkPreview = () => {
  return (
    <div className="workpreview-section">
      <h1 className="workpreview-title">Gallery</h1>
      <div className="workpreview-img-section">
        <div className="section1">
          <div className="img-container">
            <img src="../images-2/img9.jpg" alt="" />
          </div>
          <div className="img-container">
            <img src="../images-2/img11.jpg" alt="" />
          </div>
        </div>
        <div className="section2">
          <div className="img-container">
            <img src="../images-2/img28.jpg" alt="" />
          </div>
          <div className="img-container">
            <img src="../images-2/img13.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="view-more">
        <Link to="/gallery">View More</Link>
      </div>
    </div>
  );
};

export default WorkPreview;
