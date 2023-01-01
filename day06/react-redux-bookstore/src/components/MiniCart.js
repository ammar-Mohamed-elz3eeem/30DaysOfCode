import React from "react";
import { useOutletContext } from "react-router";
import { connect } from "react-redux";
import CartItem from "./CartItem";
const style = require("../styles.css");

const MiniCart = (props) => {

	const miniCartMenu = React.useRef(null);
	
	const openMiniCart = () => {
		miniCartMenu.current.classList.toggle(style.show);
	}

	if (typeof props.cart === "undefined") {
		return <div>Your cart is empty</div>
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
		<div className={style.minicart}>
			<button className="minicart-button btn btn-secondary" onClick={openMiniCart}>Cart</button>
			<div ref={miniCartMenu} className={`fixed ${style.minicartMenu} hidden bg-primary`}>
				<div className={`${style.minicartHeader} d-flex align-items-center justify-content-between`}>
					<h4 className="text-white">Cart list</h4>
					<button onClick={openMiniCart} className="btn-close bg-white btn-secondary"></button>
				</div>
				<div className={style.minicartBody}>
					{itemsOnCart}
					{
						prices && <div className="d-flex align-items-center justify-content-between bg-light p-2 rounded">
							<h5>Subtotal:</h5>
							<p><strong>${prices.toFixed(2)}</strong></p>
						</div>
					}
				</div>
			</div>
		</div>
	);
}

export default connect(({reducer}) => ({cart: reducer.cart, products: reducer.all}), {})(MiniCart);