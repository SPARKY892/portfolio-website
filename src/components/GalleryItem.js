import React from "react";
import Modal from "./Modal";

const GalleryItem = ({title, image, overlayText}) => {
  return (
    <div className="galleryItem">
      <div className="galleryItemHeader">{title}</div>
      <div className="galleryItemContent">
        <img src={image} alt="not found" width="100%" />
        <div className="galleryItemOverlay">
          <div className="overlayText">{overlayText}</div>
          <Modal title={title} />
        </div>
      </div>
    </div>
  );
}

export default GalleryItem;