import "./CV.scss";
import React from "react";

const Home = () => {
  return (
    <div className="resumeContainer">
      <h1 className="resumeText">Download a copy of my CV.</h1>
      <div className="downloadContainer">
        <div className="iconContainer">
          <a className="resumeIcon" href="/resume/Mark_Smellie_CV.pdf" download>
            <i className="far fa-file-pdf"></i>
          </a>
          <h1 className="downloadText">PDF</h1>
        </div>
        <div className="iconContainer">
          <a className="resumeIcon" href="/resume/Mark_Smellie_CV.docx" download>
            <i className="far fa-file-word"></i>
          </a>
          <h1 className="downloadText">DOCX</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;