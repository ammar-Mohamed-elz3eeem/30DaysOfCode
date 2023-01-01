import React from "react"
import { connect } from "react-redux";
const style = require("../styles.css");
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import EmptyCard from "../components/EmptyCard";


const Cart = (props) => {
	
	if (typeof props.cart === "undefined" || Object.keys(props.cart).length <= 0) {
		return <EmptyCard />
	}

	const booksInCart = Object.keys(props.cart)
	const booksInfo = props.products.filter(b => booksInCart.includes(b._id));
	let prices = 0;

	const itemsOnCart = booksInfo.map(item => {
		prices += props.cart[item._id] * item.book_price
		return (
			<CartItem key={item._id} book={item} totalItems={props.cart[item._id]} />
		);
		console.log(prices)
	});

	return (
		<div className="container">
			<div className={`d-flex align-items-center justify-content-between`}>
				<h4 className="text-white">Cart</h4>
			</div>
			<div className="row">
				<div className="col-12 col-sm-8">
					{itemsOnCart}
				</div>
				<div className="col-12 col-sm-4">
					{
						prices && <div className="d-flex align-items-center justify-content-between bg-light p-2 rounded">
							<h5>Subtotal:</h5>
							<p><strong>${prices.toFixed(2)}</strong></p>
						</div>
					}
					<div className="d-grid">
						<Link className="text-white btn btn-lg btn-primary" to="/checkout">
							Proceed to Checkout
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default connect(({reducer}) => ({cart: reducer.cart, products: reducer.all}), {})(Cart)