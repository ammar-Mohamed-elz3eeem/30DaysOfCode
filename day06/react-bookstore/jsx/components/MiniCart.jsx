import React from "react";
import { useOutletContext } from "react-router";
const style = require("../styles.css");

const MiniCart = ({ cartItems }) => {
	const miniCartMenu = React.useRef(null);
	
	const openMiniCart = () => {
		miniCartMenu.current.classList.toggle(style.show);
	}

	if (Object.keys(cartItems).length < 0) {
		return <div>Your cart is empty</div>
	}

	const prices = Object.values(cartItems).flat().map(item => item.price)

	const itemsOnCart = Object.keys(cartItems).map(item => {
		return (
			<div key={item} className="book-info d-flex align-items-center justify-content-between bg-light p-2" style={{gap: 10, borderRadius: 10, margin: `10px 0`}}>
				<div className="lb">
					{cartItems[item][0].volumeInfo.imageLinks.thumbnail 
	 					? <div className={style.cartitemImage} style={{backgroundImage: `url(${cartItems[item][0].volumeInfo.imageLinks.thumbnail})`}}></div>
	 					: <img height="150" src="/images/not-found-cover.png" alt="image-not-found" />}
	 			</div>
				 <div className={`${style.flexGrow}`}>
					<div className="d-flex flex-column">
						<p className="mb-0">{cartItems[item][0].volumeInfo.title}</p>
						<p className="mb-0"><small><strong>Number: {cartItems[item].length}</strong></small></p>
					</div>
				</div>
				<div className="rb">
					<div className="d-flex flex-column">
						<p className="mb-0"><strong>price</strong></p>
						${(parseFloat(cartItems[item][0].price) * cartItems[item].length).toFixed(2)}
					</div>
				</div>
			</div>
		);
	})

	const cartTotal = cartItems.id;

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
						prices.length > 0 && <div className="d-flex align-items-center justify-content-between bg-light p-2 rounded">
							<h5>Subtotal:</h5>
							<p><strong>{prices.reduce((prev, curr) => prev+curr).toFixed(2)}</strong></p>
						</div>
					}
				</div>
			</div>
		</div>
	);
}

export default MiniCart;