import "./Header.scss";
import React from "react";
import Link from "./Link";

const Header = ({ onPageSelect, select }) => {
	return (
		<div className="header">
			<div className="navButtons">
				<ul className="navListWrapper">
					<li
						onClick={() => onPageSelect("Home")}
						className={`home navList ${select}`}
					>
						<Link href="/" className="item">
							Home
						</Link>
					</li>
					<li
						onClick={() => onPageSelect("Projects")}
						className="projects navList"
					>
						<Link href="/projects" className="item">
							Projects
						</Link>
					</li>
					<li
						onClick={() => onPageSelect("CV")}
						className="cv navList"
					>
						<Link href="/CV" className="item">
							CV
						</Link>
					</li>
					<hr className="slidingHR" />
				</ul>
			</div>
		</div>
	);
};

export default Header;
