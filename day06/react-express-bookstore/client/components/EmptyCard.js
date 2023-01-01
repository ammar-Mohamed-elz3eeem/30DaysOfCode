import React from "react"
import { Link } from "react-router-dom";

const EmptyCard = () => {
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

export default EmptyCard;