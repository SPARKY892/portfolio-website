import React from "react";
import Header from "./Header";
import Home from "./Home";
import Route from "./Route";
import Gallery from './Gallery';

class App extends React.Component {
  state = { selectedPage: "Home", select: "homeSelect" };

  onPageSelect = (page) => {
    this.setState({ selectedPage: page });
    if (page === "Home") {
      this.setState({ select: "homeSelect" });
    } else if (page === "About") {
      this.setState({ select: "aboutSelect" });
    } else if (page === "Gallery") {
      this.setState({ select: "gallerySelect" });
    } else if (page === "CV") {
      this.setState({ select: "cvSelect" });
    }
    console.log("CurrentPage: ", page);
  };

  render() {
    return (
      <div className="pageContainer">
        <Header onPageSelect={this.onPageSelect} select={this.state.select} />
        <Route path="/">
          <Home />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
      </div>
    );
  }
}

export default App;
