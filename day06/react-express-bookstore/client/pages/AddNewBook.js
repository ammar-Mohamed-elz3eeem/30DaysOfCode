import React from "react";
import formSerialize from "form-serialize";
import axios from "axios";

const AddNewBook = () => {
	
	const handleBookSubmit = (e) => {
		e.preventDefault();
		const data = formSerialize(e.target);
		console.log(data);
		axios.post("http://localhost:3000/books", data).then((res) => {
			console.log(res);
		}).catch((err) => {
			console.error("Error happened while submmiting the form ", err);
		})
	}
	
	return (
		<div className="container">
			<div className="row">
				<div className="col-12 col-sm-8">
					<div className="checkout-form">
						<form method="post" action="/books" onSubmit={handleBookSubmit}>
							<fieldset>
								<div className="form-group">
									<label htmlFor="book-title-input" className="form-label mt-4">Book Title</label>
									<input type="text" name="book_title" className="form-control" id="book-title-input" aria-describedby="emailHelp" placeholder="Enter Book Title" />
								</div>
								<div className="form-group">
									<label htmlFor="book-cover-input" className="form-label mt-4">Book Cover</label>
									<input type="text" name="book_cover" className="form-control" id="book-cover-input" placeholder="Enter Book Cover URL" />
								</div>
								<div className="form-group">
									<label htmlFor="book-title-input" className="form-label mt-4">Book ISBN</label>
									<input type="text" name="book_isbn" className="form-control" id="book-title-input" aria-describedby="emailHelp" placeholder="Enter Book ISBN" />
								</div>
								<div className="form-group">
									<label htmlFor="subtitle-input" className="form-label mt-4">Book subtitle</label>
									<input type="text" name="book_subtitle" className="form-control" id="subtitle-input" aria-describedby="emailHelp" placeholder="Enter Book Subtitle" />
								</div>
								<div className="form-group">
									<label htmlFor="subtitle-input" className="form-label mt-4">Book subtitle</label>
									<textarea className="form-control" cols={60} rows={10} name="book_description" placeholder="Please enter Book Description"></textarea>
								</div>
								<div className="form-group">
									<label htmlFor="subtitle-input" className="form-label mt-4">Book price</label>
									<input type="text" name="book_price" className="form-control" id="subtitle-input" aria-describedby="emailHelp" placeholder="Enter price" />
								</div>
								<button type="submit" className="btn btn-primary">Send Data</button>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddNewBook;