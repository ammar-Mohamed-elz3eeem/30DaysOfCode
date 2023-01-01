const React = require("react");

const About = ({name, url, job}) => (
	<div className="about-me">
		<p>My name is {name}</p>
		<p>I am working as a {job}</p>
		<p>{url}</p>
	</div>
);

module.exports = About;