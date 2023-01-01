import React from "react";
import { connect } from "react-redux";
import { useParams, Link, useOutletContext } from "react-router-dom";
const { addToCartActionCreator, fetchProductActionCreator } = require("../redux/module").default;

const SingleBookTemplate = ( props ) => {

	const { id: book_isbn } = useParams();

	const { stateChanged } = useOutletContext();

	React.useEffect(() => {

		if (book_isbn) {
			props.fetchProd(book_isbn);
		}

	}, [stateChanged]);

	const add = () => {
		props.addToCart(props.product._id)
		alert(`${props.product._id} added to cart`)
	}

	if (props.product) {
		return (
			<div className="single-book-page">
				<div className="container">
					<div className="row">
						<div className="modal-body">
							<div className="row">
								
								<div className="col-sm-6 col-12 text-center">
									{props.product.book_cover 
										? <img height="400" src={props.product.book_cover} alt={props.product.book_title} />
										: <img height="400" src="/images/not-found-cover.png" alt="image-not-found" />}
								</div>
								
								<div className="col-sm-6 col-12">
									<h3>
										{props.product.book_title}
									</h3>
									<h4>
										{props.product.book_subtitle}
									</h4>
									<h5>
										Price: ${props.product.book_price}
									</h5>
									<p>
										{props.product.book_description}
									</p>
									<div className="card-footer d-flex align-items-center justify-content-between">
										<button onClick={add} className="btn btn-primary">Add to cart</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

}

export default connect(( { reducer } ) => {
	return ({ product: reducer.current, cart: reducer.cart })
}, {fetchProd: fetchProductActionCreator, addToCart: addToCartActionCreator})(SingleBookTemplate);