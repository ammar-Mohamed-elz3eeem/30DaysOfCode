import React from "react";

import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Content from "./components/Content.jsx";
import Post from "./components/Post.jsx";
import Posts from "./components/Posts.jsx";
const ReactDOM = require("react-dom");
const RouterDOM = require("react-router-dom");

import "../bootstrap.css";
import "../public/main.css"

const posts = [
	{
		id: 512,
		postTitle: "Make Money Online",
		postContent: "how to make money online ? most frustrated question over the years we will anser it now",
		author: "Ammar Massoud"
	},
	{
		id: 513,
		postTitle: "Learn how to program",
		postContent: "Learning programming is the most important thing specially because we are in 21th century",
		author: "Alaa Mohamed"
	}
];

const App = () => {

	return (
			<RouterDOM.Routes>
				<RouterDOM.Route path="/" element={<Content />}>
			 		<RouterDOM.Route path="/about" element={<About />}></RouterDOM.Route>
			 		<RouterDOM.Route path="/contact" element={<Contact />}></RouterDOM.Route>
			 		<RouterDOM.Route path="/posts" element={<Posts posts={posts} />}></RouterDOM.Route>
			 		<RouterDOM.Route path="/post/:id" element={<Post posts={posts} />} />
			 	</RouterDOM.Route>
			</RouterDOM.Routes>
	);
}

ReactDOM.render(<RouterDOM.BrowserRouter>
	<App />
</RouterDOM.BrowserRouter>, document.getElementById("app"))