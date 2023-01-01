import React from "react";
import { NavLink } from "react-router-dom";
import MiniCart from "./MiniCart";
// import "../styles.css"

const Header = () => {
	return (
		<div className="container mb-5">
			<header>
				<a className="navbar-brand" href="#">Navbar</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
			</header>
			<nav className="px-3 navbar navbar-expand-lg navbar-dark d-flex align-items-center justify-content-between bg-primary">
				<div className="collapse navbar-collapse" id="navbarColor03">
					<ul className="navbar-nav me-auto">
						<li className="nav-item">
							<NavLink className="nav-link" to="/">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/cart">
								Cart
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/checkout">
								Checkout
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/products/20">
								Product No.20
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/add-book">
								Add New Book
							</NavLink>
						</li>
					</ul>
				</div>
				<MiniCart />
			</nav>
		</div>
	);
}

export default Header;