import React from "react";

const ProjectsItem = ({ title, image, overlayText, onClick }) => {
	return (
		<div className="projectsItem" onClick={onClick}>
			<div className="projectsItemHeader">{title}</div>
			<div className="projectsItemContent">
				<img src={image} alt="not found" width="100%" />
				<div className="projectsItemOverlay">
					<div className="overlayText">{overlayText}</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectsItem;
