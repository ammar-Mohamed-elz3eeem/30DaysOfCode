import React from "react";
import { connect } from "react-redux"
const styleObj = require("../styles.css");

const CartItem = ({ book, totalItems }) => {
	return (
		<div key={book.id} className="book-info d-flex align-items-center justify-content-between bg-light p-2" style={{gap: 10, borderRadius: 10, margin: `10px 0`}}>
			<div className="lb">
				{book.volumeInfo.imageLinks.thumbnail 
					? <div className={styleObj.cartitemImage} style={{backgroundImage: `url(${book.volumeInfo.imageLinks.thumbnail})`}}></div>
					: <img height="150" src="/images/not-found-cover.png" alt="image-not-found" />}
			</div>
				<div className={`${styleObj.flexGrow}`}>
				<div className="d-flex flex-column">
					<p className="mb-0">{book.volumeInfo.title}</p>
					<p className="mb-0"><small><strong>Number: {parseInt(totalItems)}</strong></small></p>
				</div>
			</div>
			<div className="rb">
				<div className="d-flex flex-column">
					<p className="mb-0"><strong>price</strong></p>
					${(parseFloat(book.price) * parseInt(totalItems)).toFixed(2)}
				</div>
			</div>
		</div>
	);
}

export default CartItem;