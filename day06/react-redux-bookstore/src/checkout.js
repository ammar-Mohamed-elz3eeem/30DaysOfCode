import React from "react"
import { connect } from "react-redux";
import { useOutletContext } from "react-router";
import { Link } from "react-router-dom";
import CartItem from "./components/CartItem";
const style = require("./styles.css");

const Checkout = (props) => {

	if (typeof props.cart === "undefined") {
		return (
			<div className="container">
				<div className="text-center">
					<p>You have no items in your shopping cart</p>
					<div className="d-grid">
						<button className="btn btn-lg btn-primary"><Link className="text-white" style={{textDecoration: 'none'}} to="/">Back to Shop</Link></button>
					</div>
				</div>
			</div>
		);
	}

	const booksInCart = Object.keys(props.cart)
	const booksInfo = props.products.filter(b => booksInCart.includes(b.id));
	let prices = 0;

	const itemsOnCart = booksInfo.map(item => {
		const book = Object.assign({price: 19.99}, item);
		console.log(book);
		prices += props.cart[book.id] * book.price
		return (
			<CartItem key={item.id} book={book} totalItems={props.cart[item.id]} />
		);
	});

	return (
		<div className="checkout">
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-8">
						<div className="checkout-form">
							<form>
								<fieldset>
									<div className="form-group">
										<label htmlFor="username-input" className="form-label mt-4">Username</label>
										<input type="email" className="form-control" id="username-input" aria-describedby="emailHelp" placeholder="Enter email" />
									</div>
									<div className="form-group">
										<label htmlFor="email-input" className="form-label mt-4">Email address</label>
										<input type="email" className="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Enter email" />
										<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
									</div>
									<div className="form-group">
										<label htmlFor="password-input" className="form-label mt-4">Password</label>
										<input type="email" className="form-control" id="password-input" aria-describedby="emailHelp" placeholder="Enter email" />
									</div>
									<div className="form-group">
										<label htmlFor="cpass-input" className="form-label mt-4">Confirm Password</label>
										<input type="email" className="form-control" id="cpass-input" aria-describedby="emailHelp" placeholder="Enter email" />
									</div>
								</fieldset>
							</form>
						</div>
					</div>
					<div className="col-12 col-sm-4">
						{itemsOnCart}
					</div>
				</div>
			</div>
		</div>
	);
}

export default connect(({reducer})=>({cart: reducer.cart, products: reducer.all}), {})(Checkout);