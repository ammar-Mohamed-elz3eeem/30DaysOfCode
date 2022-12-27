import React from "react";

const Post = ({ post }) => {

	return (
		<div className="col-md-9">
			<div className="card">
				<div className="card-header d-flex align-items-center justify-content-between">
					<h2>
						{post.title}
					</h2>
					<p style={{whiteSpace: "nowrap"}}>{post.author}</p>
				</div>
				<div className="card-body">
					{post.text}
				</div>
			</div>
		</div>
	);
}

export default Post;