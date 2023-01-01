import React from "react";
import SingleBookBlock from "../components/SinglePageBlock";
import { connect } from "react-redux";

const Home = (props) => {

	const books = props.all && props.all.map((book) => {
		return (
			<div className="col-sm-3 col-12 pb-3" key={book._id}>
				<SingleBookBlock book={book} />
			</div>
		);
	});

	return (
		<div className="container">
			<div className="row">
				{books}
			</div>
		</div>
	);
}

export default connect(({reducer}) => ({...reducer}), {})(Home);