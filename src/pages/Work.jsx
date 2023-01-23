import React, { useState } from "react";
import { Photos } from "../components/images.jsx";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "../Styles/Gallery.scss";
import Header from "../components/Header.jsx";
import { GrNext, GrPrevious } from "react-icons/gr";
import { IconContext } from "react-icons";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import { RiCloseFill } from "react-icons/ri";

const Gallery = () => {
  const [data, setData] = useState({ img: "", i: 0 });

  const viewImage = (img, i) => {
    setData({ img, i });
  };

  const imgAction = action => {
    let i = data.i;
    if (action === "next-img") {
      setData({ img: Photos[i + 1], i: i + 1 });
    }
    if (action === "prev-img") {
      setData({ img: Photos[i - 1], i: i - 1 });
    }
    if (!action) {
      setData({ img: "", i: 0 });
    }
  };

  return (
    <>
      <Header />
      {data.img && (
        <div className="large-img">
          <IconContext.Provider value={{ color: "white", size: "50px" }}>
            <button onClick={() => imgAction()} className="exit-btn">
              <RiCloseFill />
            </button>
            <button className="prev-btn" onClick={() => imgAction("prev-img")}>
              <TiChevronLeft />
            </button>
            <img onClick={() => imgAction()} src={data.img} alt="" />
            <button className="next-btn" onClick={() => imgAction("next-img")}>
              <TiChevronRight />
            </button>
          </IconContext.Provider>
        </div>
      )}
      <div className="gallery-container">
        <div className="gallery-title">Gallery</div>
        <div className="gallery-display">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="15px">
              {Photos.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    objectFit: "cover",
                    cursor: "pointer",
                    borderRadius: "5px",
                    boxShadow:
                      "box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                  alt=""
                  onClick={() => {
                    viewImage(image, i);
                  }}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </>
  );
};

export default Gallery;
