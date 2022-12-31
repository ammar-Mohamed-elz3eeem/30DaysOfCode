import React from "react";
import { Link ,useLocation, useNavigate } from "react-router-dom";

export const usePrev = (value) => {
	const ref = React.useRef();
	React.useEffect(() => {
	 	ref.current = value;
	}, [value]);
	return ref.current;
}

const SingleBookBlock = ( { book, index, handleAddToCart, ...props } ) => {
	
	
	book.price = 19.99;
	
	const OnAddtocart = () => {
		handleAddToCart(book.id)
	}
	
	return (
		<div className="card">
			<div className="card-image">
				<div className="book-cover text-center">
					{(book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail) 
					? <img height="250" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
					: <img height="250" src="/images/not-found-cover.png" alt="image-not-found" />}
				</div>
			</div>
			<div className="card-header">
				<div className="book-title text-center d-flex align-items-center justify-content-between py-2">
					<h5 className="mb-0">{book.volumeInfo.title}</h5>
					<p className="mb-0"><strong>${book.price}</strong></p>
				</div>
			</div>
			<div className="card-body">
				{book.volumeInfo.description && book.volumeInfo.description.substr(1, 100) + '...'}
			</div>
			<div className="card-footer d-flex align-items-center justify-content-between">
				<button onClick={OnAddtocart} className="btn btn-primary">Add to cart</button>
				<Link to={`/products/${index}`} state={{modal: true, returnTo: location.pathname}}>More info</Link>
			</div>
		</div>
	);

}

export default SingleBookBlock;