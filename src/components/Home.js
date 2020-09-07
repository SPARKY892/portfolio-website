import "./Home.scss";
import React from "react";
import TextRoll from './TextRoll';

const Home = () => {
  return (
    <div className="homePage">
      <h1 className="homeIntro">Header 1</h1>
      <TextRoll />
      <div className="ui container center aligned">
        <h3>Header 3</h3>
        <i className="big orange icon arrow right" />
      </div>
    </div>
  );
};

export default Home;
