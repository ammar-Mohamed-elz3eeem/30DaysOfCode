import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ posts }) => {

	const postsList = posts.map((post, idx) => (
		<div className="post col-md-4" key={idx}>
			<div className="card">
				<div className="card-header">
					{post.title}
				</div>
				<div className="card-body">
					<p>{post.text}</p>
					<a href={"#/post/" + post.slug}>Read More</a>
				</div>
			</div>
		</div>
	))

	return (
		<div className="posts-list">
			<div className="posts-list-heading">
				<h1>
					Posts page
				</h1>
			</div>
			<div className="posts-list-content row">
				{postsList}
			</div>
		</div>
	);
}

export default Posts;