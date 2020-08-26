import React from "react";
import Header from "./Header";
import Home from "./Home";

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
      <div>
        <Header onPageSelect={this.onPageSelect} select={this.state.select} />
        <Home />
        <h3>Temp Footer</h3>
      </div>
    );
  }
}

export default App;
