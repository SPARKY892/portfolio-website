import "./Home.scss";
import React from "react";
import TextRoll from './TextRoll';

const Home = () => {
  return (
    <div className="homePage">
      <h1 className="homeIntro">Hi, I'm Mark.</h1>
      <h2 className="homeText">I want to be a Web Developer</h2>
      <div className="homeEnding">
        <h3>Let me show you some of my work.</h3>
      </div>
    </div>
  );
};

export default Home;
