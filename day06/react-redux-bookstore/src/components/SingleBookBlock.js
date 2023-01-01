import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const { addToCartActionCreator } = require("../redux/module").default;

const SingleBookBlock = ( { book, ...props } ) => {

	const addToCart = () => {
		const res = props.addToCartAction(book.id);
		console.log("After Add to Cart: ", res);
	}

	return (
		<div className="card">
			<div className="card-image">
				<div className="book-cover text-center">
					{(book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail) 
					? <img height="250" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
					: <img height="250" src="/images/not-found-cover.png" alt="image-not-found" />}
				</div>
			</div>
			<div className="card-header">
				<div className="book-title text-center d-flex align-items-center justify-content-between py-2">
					<h5 className="mb-0">{book.volumeInfo.title}</h5>
					<p className="mb-0"><strong>${book.price}</strong></p>
				</div>
			</div>
			<div className="card-body">
				{book.volumeInfo.description && book.volumeInfo.description.substr(1, 100) + '...'}
			</div>
			<div className="card-footer d-flex align-items-center justify-content-between">
				<button className="btn btn-primary" data-bookid={book.id} onClick={addToCart}>Add to cart</button>
				<Link to={`/products/${book.id}`} state={{modal: true, returnTo: location.pathname}}>More info</Link>
			</div>
		</div>
	);

}

export default connect( ( { reducer } ) => ({cart: reducer.cart}), {addToCartAction: addToCartActionCreator})(SingleBookBlock);