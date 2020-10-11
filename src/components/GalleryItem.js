import React from "react";
import { isTemplateExpression } from "typescript";

const GalleryItem = ({title, image, overlayText}) => {
    return (
        <div className="galleryItem">
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