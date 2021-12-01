import "./Projects.scss";
import React, { useState } from "react";
import ProjectsItem from "./ProjectsItem";
import Modal from "./Modal";

const Projects = ({ projects }) => {
	const [currentItem, setCurrentItem] = useState(0);
	const [toggleModal, setToggleModal] = useState(false);

	const renderedItems = projects.map((project, index) => {
		return (
			<ProjectsItem
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
		<div className="projectsPage">
			<div className="projectsHeader">
				<h1>Projects</h1>
				<h3>A collection of some of my work</h3>
			</div>
			<div className="projectsGrid">
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

export default Projects;
