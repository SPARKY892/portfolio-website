import "./Header.scss";
import React from "react";

const Header = ({ onPageSelect, select }) => {
  return (
    <div className="header">
      <div className="navButtons">
        <ul className="navListWrapper">
          <li
            onClick={() => onPageSelect("Home")}
            className={`home navList ${select}`}
          >
            <button className="button">Home</button>
          </li>
          <li onClick={() => onPageSelect("About")} className="about navList">
            <button className="button">About</button>
          </li>
          <li onClick={() => onPageSelect("Gallery")} className="gallery navList">
            <button className="button">Gallery</button>
          </li>
          <li onClick={() => onPageSelect("CV")} className="cv navList">
            <button className="button">CV</button>
          </li>
          <hr className="slidingHR" />
        </ul>
      </div>
    </div>
  );
};

export default Header;
