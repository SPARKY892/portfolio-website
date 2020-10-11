import "./Gallery.scss";
import React from "react";
import GalleryItem from "./GalleryItem";

const Gallery = ({projects}) => {
  const renderedItems = projects.map(project => {
    return (
      <GalleryItem
        title={project.title}
        image={project.image}
        overlayText={project.overlayText}
      />
    );
  });
  
  return (
    <div className="galleryPage">
      <div className="galleryHeader">
        <h1>Gallery</h1>
        <h3>A collection of some of my work</h3>
      </div>
      <div className="galleryGrid">
        <React.Fragment>{renderedItems}</React.Fragment> 
      </div>
    </div>
  );
};

export default Gallery;
