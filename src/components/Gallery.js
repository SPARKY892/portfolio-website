import "./Gallery.scss";
import React, { useState } from "react";
import GalleryItem from "./GalleryItem";
import Modal from "./Modal";

const Gallery = ({ projects }) => {
  const [currentItem, setCurrentItem] = useState(0);
  const [toggleModal, setToggleModal] = useState(false);

  const renderedItems = projects.map((project, index) => {
    return (
      <GalleryItem
        id={index}
        title={project.title}
        image={project.image}
        overlayText={project.overlayText}
        onClick={() => {
          setCurrentItem(index);
          setToggleModal(!toggleModal);
        }}
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
      <Modal
        title={projects[currentItem].title}
        description={projects[currentItem].description}
        onClick={() => setToggleModal(!toggleModal)}
        modalShown={toggleModal}
        slideshowImages={projects[currentItem].slideshowImages}
        githubLink={projects[currentItem].githubLink}
      />
    </div>
  );
};

export default Gallery;
