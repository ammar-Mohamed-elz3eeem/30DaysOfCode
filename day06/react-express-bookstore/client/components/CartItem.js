import React from "react";
import { connect } from "react-redux";
import methods from "../redux/module";
const styleObj = require("../styles.css");

const CartItem = ({ book, totalItems, ...props }) => {

	const onRemoveProduct = () => {
		props.removeFromCart(book._id);
	}

	return (
		<div key={book._id} className="book-info d-flex align-items-end justify-content-between bg-light p-2" style={{gap: 10, position: "relative", borderRadius: 10, margin: `10px 0`}}>
 			<button onClick={onRemoveProduct} className={`${styleObj.closeRounded} btn-close`}></button>
			<div className="lb">
 				{book.book_cover 
 					? <div className={styleObj.cartitemImage} style={{backgroundImage: `url(${book.book_cover})`}}></div>
 					: <img height="150" src="/images/not-found-cover.png" alt="image-not-found" />}
 			</div>
 				<div className={`${styleObj.flexGrow}`}>
 				<div className="d-flex flex-column">
 					<p className="mb-0">{book.book_title}</p>
 					<p className="mb-0"><small><strong>Number: {parseInt(totalItems)}</strong></small></p>
 				</div>
 			</div>
 			<div className="rb">
 				<div className="d-flex flex-column">
 					<p className="mb-0"><strong>price</strong></p>
 					${(parseFloat(book.book_price) * parseInt(totalItems)).toFixed(2)}
 				</div>
 			</div>
 		</div>
	);
}

export default connect(null, {removeFromCart: methods.removeFromCartActionCreator})(CartItem);