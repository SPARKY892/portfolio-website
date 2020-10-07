import "./Gallery.scss";
import React from "react";

const Gallery = () => {
  return (
    <div className="galleryPage">
      <div className="galleryHeader">
        <h1>Gallery</h1>
        <h3>A collection of some of my work</h3>
      </div>
      <div className="galleryGrid">
        <div className="galleryItem">
          <div className="galleryItemHeader">Pomodoro Timer</div>
          <div className="galleryItemContent">
            <img src="images/pomodoro.jpg" alt="not found" width="100%" />
            <div className="galleryItemOverlay">
              <div className="overlayText">Overlay Text</div>
            </div>
          </div>
        </div>
        <div className="galleryItem">
          <div className="galleryItemHeader">Pomodoro Timer</div>
          <div className="galleryItemContent">
            <img src="images/pomodoro.jpg" alt="not found" width="100%" />
          </div>
        </div>
        <div className="galleryItem">
          <div className="galleryItemContent">
            <div className="galleryItemHeader">Pomodoro Timer</div>
            <img src="images/pomodoro.jpg" alt="not found" width="100%" />
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
