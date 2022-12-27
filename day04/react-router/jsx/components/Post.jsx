import React, { useEffect } from "react";
import { useParams } from "react-router";

const Post = ({ posts }) => {

	const routeParams = useParams();

	const post = posts.find((value) => value.id == routeParams.id)

	return (
		<div className="col-md-9">
			<div className="card">
				<div className="card-header d-flex align-items-center justify-content-between">
					<h1>
						{post.postTitle}
					</h1>
					<p>{post.author}</p>
				</div>
				<div className="card-body">
					{post.postContent}
				</div>
			</div>
		</div>
	);
}

export default Post;