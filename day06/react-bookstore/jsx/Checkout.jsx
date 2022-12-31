import React from "react"
import { useOutletContext } from "react-router";
import { Link } from "react-router-dom";
import CartItems from "./components/CartItems";
const style = require("./styles.css");

const Checkout = () => {
	const {totalItems} = useOutletContext();
	const totalItemsKeys = Object.keys(totalItems);
	const totalItemsValues = Object.values(totalItems);
	console.log(totalItems);
	if (totalItemsKeys.length <= 0) {
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
	const itemsOnCart = Object.keys(totalItems).map(item => {
		return (
			<CartItems key={item} totalItems={totalItems} item={item} styleObj={style} />
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

export default Checkout