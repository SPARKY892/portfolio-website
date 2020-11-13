import "./CV.scss";
import React from "react";

const Home = () => {
  return (
    <div className="resumeContainer">
      <a className="resumeIcon" href="/resume/Mark_Smellie_CV.pdf" download>
        <i className="far fa-file-pdf"></i>
      </a>
      <a className="resumeIcon" href="/resume/Mark_Smellie_CV.docx" download>
        <i className="far fa-file-word"></i>
      </a>
    </div>
  );
};

export default Home;