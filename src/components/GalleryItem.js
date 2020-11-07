import React from "react";

const GalleryItem = ({id, title, image, overlayText, onClick}) => {    
  return (
    <div className="galleryItem" onClick={onClick}>
      <div className="galleryItemHeader">{title}</div>
      <div className="galleryItemContent">
        <img src={image} alt="not found" width="100%" />
        <div className="galleryItemOverlay">
          <div className="overlayText">{overlayText}</div>
        </div>
      </div>
    </div>
  );
}

export default GalleryItem;