import React from "react";
import "../Styles/WorkPreview.scss";
import { Link } from "react-router-dom";

const WorkPreview = () => {
  return (
    <div className="workpreview-section">
      <h1 className="workpreview-title">Gallery</h1>
      <div className="workpreview-img-section">
        <div className="section1">
          <img src="../images-2/img13.jpg" alt="" />
          <img src="../images-2/img11.jpg" alt="" />
        </div>
        <div className="section2">
          <img src="../images-2/img5.jpg" alt="" />
          <img src="../images-2/img9.jpg" alt="" />
        </div>
      </div>
      <div className="view-more">
        <Link to="/gallery">View More</Link>
      </div>
    </div>
  );
};

export default WorkPreview;
