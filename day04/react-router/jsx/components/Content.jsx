import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Content = ({ children }) => {
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
								<NavLink className="nav-link" to="/">Home</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/about">About</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/contact">Contact us</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/posts">Posts</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="page-content py-5">
				<Outlet />
			</div>
		</div>
	);
}

Content.contextTypes = {
	router: React.propTypes.object.isRequired
}

export default Content;