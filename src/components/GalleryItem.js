import React from "react";
import Modal from "./Modal";

const GalleryItem = ({title, image, overlayText, modalShown}) => {  
  function showModal() {
    let modalState = !modalShown;
    console.log("Modal state change");
  };
  
  return (
    <div className="galleryItem">
      <div className="galleryItemHeader">{title}</div>
      <div onClick={showModal} className="galleryItemContent">
        <img src={image} alt="not found" width="100%" />
        <div className="galleryItemOverlay">
          <div className="overlayText">{overlayText}</div>
          <Modal  title={title} modalShown={this.modalState}/>
        </div>
      </div>
    </div>
  );
}

export default GalleryItem;