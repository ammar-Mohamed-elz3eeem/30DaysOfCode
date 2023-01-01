import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useParams, useOutletContext } from "react-router";
const { fetchProductActionCreator, addToCartActionCreator } = require("../redux/module").default;

const SingleBookPage = ( props ) => {
	
	const { id } = useParams();

	const { prods } = useOutletContext();

	useEffect(() => {

		if (prods) {
			props.fetchProd(id);
		}

	}, [prods]);

	const add = () => {
		props.addToCart(props.product.id)
		alert(`${props.product.id} added to cart`)
	}

	if (props.product) {
		const current = Object.assign({}, props.product);
		current.price = 19.99;
		return Object.keys(current).length > 0 && (
			<div className="single-book-page">
				<div className="container">
					<div className="row">
						<div className="modal-body">
							<div className="row">
								<div className="col-sm-6 col-12 text-center">
									{current.volumeInfo.imageLinks.thumbnail 
										? <img height="400" src={current.volumeInfo.imageLinks.thumbnail} alt={current.volumeInfo.title} />
										: <img height="400" src="/images/not-found-cover.png" alt="image-not-found" />}
								</div>
								<div className="col-sm-6 col-12">
									<h3>
										{current.volumeInfo.title}
									</h3>
									<p>
										{current.volumeInfo.description}
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
	console.log({ product: reducer.current, cart: reducer.cart });
	return ({ product: reducer.current, cart: reducer.cart })
}, {fetchProd: fetchProductActionCreator, addToCart: addToCartActionCreator})(SingleBookPage);