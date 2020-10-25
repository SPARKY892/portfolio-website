import React, { useState } from "react";
import Modal from "./Modal";

const GalleryItem = ({title, image, overlayText}) => {  
  const [toggleModal, setToggleModal] = useState(false);
  
  return (
    <div className="galleryItem">
      <div className="galleryItemHeader">{title}</div>
      <div onClick={() => (setToggleModal(!toggleModal)) } className="galleryItemContent">
        <img src={image} alt="not found" width="100%" />
        <div className="galleryItemOverlay">
          <div className="overlayText">{overlayText}</div>
          <Modal  title={title} modalShown={toggleModal}/>
        </div>
      </div>
    </div>
  );
}

export default GalleryItem;