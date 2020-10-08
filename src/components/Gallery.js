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
          <div className="galleryItemHeader">Youtube Search</div>
          <div className="galleryItemContent">
            <img src="images/pomodoro.jpg" alt="not found" width="100%" />
            <div className="galleryItemOverlay">
              <div className="overlayText">Overlay Text</div>
            </div>
          </div>
        </div>
        <div className="galleryItem">
          <div className="galleryItemHeader">Image Search</div>
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
            <div className="galleryItemOverlay">
              <div className="overlayText">Overlay Text</div>
            </div>
          </div>
        </div>
        <div className="galleryItem">
          <div className="galleryItemHeader">Notes</div>
          <div className="galleryItemContent">
            <img src="images/pomodoro.jpg" alt="not found" width="100%" />
            <div className="galleryItemOverlay">
              <div className="overlayText">Overlay Text</div>
            </div>
          </div>
        </div>
        <div className="galleryItem">
          <div className="galleryItemHeader">Widgets</div>
          <div className="galleryItemContent">
            <img src="images/pomodoro.jpg" alt="not found" width="100%" />
            <div className="galleryItemOverlay">
              <div className="overlayText">Overlay Text</div>
            </div>
          </div>
        </div>
        <div className="galleryItem">
          <div className="galleryItemHeader">Todo List</div>
          <div className="galleryItemContent">
            <img src="images/pomodoro.jpg" alt="not found" width="100%" />
            <div className="galleryItemOverlay">
              <div className="overlayText">Overlay Text</div>
            </div>
          </div>
        </div>
        <div className="galleryItem">
          <div className="galleryItemHeader">Basic Weather</div>
          <div className="galleryItemContent">
            <img src="images/pomodoro.jpg" alt="not found" width="100%" />
            <div className="galleryItemOverlay">
              <div className="overlayText">Overlay Text</div>
            </div>
          </div>
        </div>
        <div className="galleryItem">
          <div className="galleryItemHeader">Song List</div>
          <div className="galleryItemContent">
            <img src="images/pomodoro.jpg" alt="not found" width="100%" />
            <div className="galleryItemOverlay">
              <div className="overlayText">Overlay Text</div>
            </div>
          </div>
        </div>
        <div className="galleryItem">
          <div className="galleryItemHeader">Puttered</div>
          <div className="galleryItemContent">
            <img src="images/pomodoro.jpg" alt="not found" width="100%" />
            <div className="galleryItemOverlay">
              <div className="overlayText">Overlay Text</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
