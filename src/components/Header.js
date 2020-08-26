import "./Header.css";
import React from "react";

const Header = ({ onPageSelect, select }) => {
  return (
    <div className="header">
      <div className="navButtons">
        <ul className="navList">
          <li
            onClick={() => onPageSelect("Home")}
            id="navbar"
            className={`home ${select}`}
          >
            <button className="button">Home</button>
          </li>
          <li onClick={() => onPageSelect("About")} className="about">
            <button className="button">About</button>
          </li>
          <li onClick={() => onPageSelect("Gallery")} className="gallery">
            <button className="button">Gallery</button>
          </li>
          <li onClick={() => onPageSelect("CV")} className="cv">
            <button className="button">CV</button>
          </li>
          <hr />
        </ul>
      </div>
    </div>
  );
};

export default Header;
