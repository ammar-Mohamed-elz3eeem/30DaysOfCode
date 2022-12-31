import React from "react";

const CartItems = ( { item, totalItems, styleObj } ) => {
	return (
		<div key={item} className="book-info d-flex align-items-center justify-content-between bg-light p-2" style={{gap: 10, borderRadius: 10, margin: `10px 0`}}>
			<div className="lb">
				{totalItems[item][0].volumeInfo.imageLinks.thumbnail 
					? <div className={styleObj.cartitemImage} style={{backgroundImage: `url(${totalItems[item][0].volumeInfo.imageLinks.thumbnail})`}}></div>
					: <img height="150" src="/images/not-found-cover.png" alt="image-not-found" />}
			</div>
				<div className={`${styleObj.flexGrow}`}>
				<div className="d-flex flex-column">
					<p className="mb-0">{totalItems[item][0].volumeInfo.title}</p>
					<p className="mb-0"><small><strong>Number: {totalItems[item].length}</strong></small></p>
				</div>
			</div>
			<div className="rb">
				<div className="d-flex flex-column">
					<p className="mb-0"><strong>price</strong></p>
					${(parseFloat(totalItems[item][0].price) * totalItems[item].length).toFixed(2)}
				</div>
			</div>
		</div>
	);
}

export default CartItems;