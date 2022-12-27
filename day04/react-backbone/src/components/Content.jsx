import React from "react";
const BackBone = require("backbone");

const Content = ({ children }) => {
	let isActive = BackBone.history.getFragment();
	return (
		<div className="container">
			<div className="logo py-3">
				<h1>
				<a className="navbar-brand" href="#">Navbar</a>
				</h1>
			</div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded">
				<div className="container">
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarColor01">
						<ul className="navbar-nav me-auto">
							<li className="nav-item">
								<a className={isActive == ("") ? "active nav-link" : "nav-link"} href="#/">Home</a>
							</li>
							<li className="nav-item">
								<a className={isActive == ("about") ? "active nav-link" : "nav-link"} href="#/about">About</a>
							</li>
							<li className="nav-item">
								<a className={isActive == ("contact") ? "active nav-link" : "nav-link"} href="#/contact">Contact us</a>
							</li>
							<li className="nav-item">
								<a className={isActive == ("posts") ? "active nav-link" : "nav-link"} href="#/posts">Posts</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="page-content py-5">
				{children}
			</div>
		</div>
	);
}

export default Content;