const BackBone = require("backbone");
const React = require("react");
const { render } = require("react-dom");
const { default: Content } = require("./components/Content.jsx");
const { default: Posts } = require("./components/Posts.jsx");
const { default: About } = require("./components/About.jsx");
const { default: Contact } = require("./components/Contact.jsx");
const { default: Post } = require("./components/Post.jsx");
const domEl = document.getElementById("app");
const posts = require("../posts");
import "../public/bootstrap.css";
import "../public/main.css";

console.log("Outside Backbone")

var WorkSpace = BackBone.Router.extend({
	routes: {
		"": "home",
		"posts": "posts",
		"about": "about",
		"post/:slug": "post",
		"contact": "contact"
	},
	
	home: function() {
		console.log("Inside Backbone")
		render(<Content></Content>, domEl);
	},

	posts: function() {
		render(
			<Content>
				<Posts posts={posts}></Posts>
			</Content>
		, domEl)
	},

	about: function() {
		render(<Content><About /></Content>, domEl);
	},

	contact: function() {
		render(<Content><Contact /></Content>, domEl)
	},

	post: function(slug) {
		const post = posts.find((value) => value.slug === slug)
		render(<Content><Post post={post} /></Content>, domEl)
	}
});

const routes = new WorkSpace();

BackBone.history.start()