import "./Home.css";
import React from "react";

const Home = () => {
  return (
    <div className="homePage">
      <h1 className="homeIntro">Hi, I'm Mark.</h1>
      <h2 className="homeAmbition">I want to be a web developer</h2>
      <h3 className="homeClosing">Let me show you my stuff.</h3>
      <i className="huge middle aligned icon arrow down homeArrow" />
    </div>
  );
};

export default Home;
