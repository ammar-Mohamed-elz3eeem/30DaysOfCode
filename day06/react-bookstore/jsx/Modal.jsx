import React, { useEffect } from "react"
import { useLocation } from "react-router";

const Modal = ( { book, index, isOpen } ) => {

	if (typeof book != 'undefined') {

		const modal = React.useRef(null);

		const loc = useLocation();

		return (
			<div ref={modal} className="modal bg-primary modal-lg" id={"book-" + index}>
				<div className="modal-header">
					{book.volumeInfo.title}
				</div>
				<div className="modal-body">
					<div className="row">
						<div className="col-sm-6 col-12">
							{book.volumeInfo.imageLinks.thumbnail 
								? <img height="400" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
								: <img height="400" src="/images/not-found-cover.png" alt="image-not-found" />}
						</div>
						<div className="col-sm-6 col-12">
							<p className="mb-0">
								{book.volumeInfo.description}
							</p>

							<div className="card-footer d-flex align-items-center justify-content-between">
								<button className="btn btn-primary">Add to cart</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Modal