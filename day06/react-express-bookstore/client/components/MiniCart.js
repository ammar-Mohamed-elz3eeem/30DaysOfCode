import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import EmptyCard from "./EmptyCard";
const style = require("../styles.css");

const MiniCart = (props) => {

	// refernce to dom node of the minicart
	const miniCartMenu = React.useRef(null);
	
	// function to toggle the show class on the minicart-list
	const openMiniCart = () => {
		miniCartMenu.current.classList.toggle(style.show);
	}

	// First Check if the cart is defined then gets ids on the cart
	const booksInCart = props.cart && Object.keys(props.cart);

	// First check if the cart is defined then get array of books that have ids samiliar to the ones on the cart
	const booksInfo = props.cart && props.products.filter(b => booksInCart.includes(b._id));
	let prices = 0;

	// get the items on the cart by mapping through array of books to get CartItem component
	const itemsOnCart = booksInfo && booksInfo.map(item => {
		// add the price of the set of same book multiplied by its price to add to the total price
		prices += props.cart[item._id] * item.book_price
		return (
			<CartItem key={item._id} book={item} totalItems={props.cart[item._id]} />
		);
		console.log(prices)
	});
	


	return (
		<div className={style.minicart}>
			<button className="minicart-button btn btn-secondary" onClick={openMiniCart}>Cart</button>
			<div ref={miniCartMenu} className={`fixed ${style.minicartMenu} hidden bg-primary`}>
				
					<div className={`${style.minicartHeader} d-flex align-items-center justify-content-between`}>
						<h4 className="text-white">Cart list</h4>
						<button onClick={openMiniCart} className="btn-close bg-white btn-secondary"></button>
					</div>
					{
						// check if props.cart is undefined then show empty card element, otherwise show items on cart
						((typeof props.cart === "undefined" || Object.keys(props.cart).length <= 0) && <EmptyCard />) || 
						<div className={style.minicartBody}>
							{itemsOnCart}
							{
								prices && <div className="d-flex align-items-center justify-content-between bg-light p-2 rounded">
									<h5>Subtotal:</h5>
									<p><strong>${prices.toFixed(2)}</strong></p>
								</div>
							}
						</div>
					}
			</div>
		</div>
	);
}

export default connect(({reducer}) => ({cart: reducer.cart, products: reducer.all}), {})(MiniCart);