const React = require("react");
const { Outlet, Link } = require("react-router-dom");
const styles = require("./app.css")

module.exports = {
	Content: function() {
		return (
			<div className="home-page">
				<Link to="/movies">Movies</Link>
				<Link to="/">Home</Link>
				<h1>Content Layout</h1>
				<Outlet />
			</div>
		);
	}
}