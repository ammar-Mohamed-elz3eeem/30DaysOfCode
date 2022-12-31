import React from "react";
import { useLocation, useParams, useOutletContext } from "react-router";

const SingleBookPage = () => {
	
	const { id } = useParams();
	const { prods, addToCartAction } = useOutletContext();

	const book = prods[id];

	const addToCart = () => {
		addToCartAction(prods[id].id);
	}

	if (prods.length > 0) {
		book.price = 19.99;
		return Object.keys(book).length > 0 && (
			<div className="single-book-page">
				<div className="container">
					<div className="row">
						<div className="modal-body">
							<div className="row">
								<div className="col-sm-6 col-12 text-center">
									{book.volumeInfo.imageLinks.thumbnail 
										? <img height="400" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
										: <img height="400" src="/images/not-found-cover.png" alt="image-not-found" />}
								</div>
								<div className="col-sm-6 col-12">
									<h3>
										{book.volumeInfo.title}
									</h3>
									<p>
										{book.volumeInfo.description}
									</p>
									<div className="card-footer d-flex align-items-center justify-content-between">
										<button className="btn btn-primary" onClick={addToCart}>Add to cart</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SingleBookPage;