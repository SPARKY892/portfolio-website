import React, { useState } from "react";
import Modal from "./Modal";

const GalleryItem = ({title, image, overlayText}) => {  
  const [modalShown, toggleModal] = useState(false);
  
  return (
    <div className="galleryItem">
      <div className="galleryItemHeader">{title}</div>
      <div onClick={toggleModal(!modalShown)} className="galleryItemContent">
        <img src={image} alt="not found" width="100%" />
        <div className="galleryItemOverlay">
          <div className="overlayText">{overlayText}</div>
          <Modal  title={title} modalShown={modalShown}/>
        </div>
      </div>
    </div>
  );
}

export default GalleryItem;