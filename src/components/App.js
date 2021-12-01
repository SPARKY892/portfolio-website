import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Route from "./Route";
import Projects from "./Projects";
import CV from "./CV";
import { projects } from "./projectdata";

class App extends React.Component {
	state = { selectedPage: "Home", select: "homeSelect", projects: projects };

	onPageSelect = (page) => {
		this.setState({ selectedPage: page });
		if (page === "Home") {
			this.setState({ select: "homeSelect" });
		} else if (page === "About") {
			this.setState({ select: "aboutSelect" });
		} else if (page === "Projects") {
			this.setState({ select: "projectsSelect" });
		} else if (page === "CV") {
			this.setState({ select: "cvSelect" });
		}
		console.log("CurrentPage: ", page);
	};

	render() {
		return (
			<div className="pageContainer">
				<Header
					onPageSelect={this.onPageSelect}
					select={this.state.select}
				/>
				<Route path="/">
					<Home />
				</Route>
				<Route path="/projects">
					<Projects
						projects={this.state.projects}
						modalShown={this.state.modalShown}
					/>
				</Route>
				<Route path="/CV">
					<CV />
				</Route>
				<Footer />
			</div>
		);
	}
}

export default App;
