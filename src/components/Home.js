import "./Home.css";
import React from "react";

const Home = () => {
  return (
    <div className="homePage">
      <h1 className="homeIntro">Header 1</h1>
      <h2 className="homeAmbition">Header 2 that is a bit longer</h2>
      <div className="ui container center aligned">
        <h3>Header 3</h3>
        <i className="big orange icon arrow down" />
      </div>
    </div>
  );
};

export default Home;
