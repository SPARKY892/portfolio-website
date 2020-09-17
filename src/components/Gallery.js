import "./Gallery.scss";
import React from "react";

const Gallery = () => {
  return (
    <div className="galleryPage">
      <div className="galleryHeader">
        <h1>Gallery</h1>
      </div>
      <div className="galleryGrid">
        <div className="galleryItem">
          <div className="galleryItemContent">
            <span>Description of item 1 that rambles on a bit too long</span>
          </div>
        </div>
        <div className="galleryItem">
          <div className="galleryItemContent">
            <span>item 2</span>
          </div>
        </div>
        <div className="galleryItem">
          <div className="galleryItemContent">
            <span>item 3</span>
          </div>
        </div>
        <div className="galleryItem">
          <div className="galleryItemContent">
            <span>item 4</span>
          </div>
        </div>
        <div className="galleryItem">
          <div className="galleryItemContent">
            <span>item 5</span>
          </div>
        </div>
        <div className="galleryItem">
          <div className="galleryItemContent">
            <span>item 6</span>
          </div>
        </div>
        <div className="galleryItem">
          <div className="galleryItemContent">
            <span>item 7</span>
          </div>
        </div>
        <div className="galleryItem">
          <div className="galleryItemContent">
            <span>item 8</span>
          </div>
        </div>
        <div className="galleryItem">
          <div className="galleryItemContent">
            <span>item 9</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
