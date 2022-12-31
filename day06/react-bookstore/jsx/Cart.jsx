import React from "react"
import { useOutletContext } from "react-router";
const style = require("./styles.css");
import {Link} from "react-router-dom";
import CartItems from "./components/CartItems";

const Cart = () => {
	const {totalItems} = useOutletContext();

	if (Object.keys(totalItems).length <= 0) {
		return <div className="container">Your cart is empty</div>
	}

	const prices = Object.values(totalItems).flat().map(item => item.price)

	const itemsOnCart = Object.keys(totalItems).map(item => {
		return (
			<CartItems totalItems={totalItems} item={item} styleObj={style} />
		);
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
						prices.length > 0 && <div className="d-flex align-items-center justify-content-between bg-light p-2 rounded" style={{margin: `10px 0`}}>
							<h5>Subtotal:</h5>
							<p><strong>{prices.reduce((prev, curr) => prev+curr).toFixed(2)}</strong></p>
						</div>
					}
					<div className="d-grid">
						<button className="btn btn-lg btn-primary" type="button">
							<Link className="text-white" to="/checkout">Proceed to Checkout</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart