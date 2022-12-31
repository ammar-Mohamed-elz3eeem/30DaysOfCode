import React, { useEffect } from "react";
import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import { Route, Routes, Outlet, useLocation, HashRouter, useOutletContext } from "react-router-dom"
import * as axios from "axios";
import { createHashHistory } from "history";
const cl = console.log;
const ax = axios.default;


import Checkout from "./Checkout.jsx";
import Cart from "./Cart.jsx";
import Modal from "./Modal.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import SingleBookBlock from "./components/SingleBookBlock.jsx";
import SingleBookPage from "./components/SingleBookPage.jsx";

const HomePage = () => {
	const props = useOutletContext();

	return (
		<div className="content">
			<section className="container-fluid">
				<div className="sec-title text-center pb-5">
					<h1>
						Recently Added Products
					</h1>
				</div>
				<div className="sec-content container">
					<div className="row">
						{props.prods.slice(0,4).map((book, index) => (
							<div key={index} className="col-sm-3 col-12">
								<SingleBookBlock book={book} index={index} handleAddToCart={props.addToCartAction} />
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

const App = (props) => {
	
	const locat = useLocation();
	const [ books, setBooks ] = React.useState([]);
	const [ booksLen, setBooksLen ] = React.useState(books.length);
	const [ cartItems, setCartItems ] = React.useState({});

	useEffect(() => {
		ax.get("https://www.googleapis.com/books/v1/volumes?q=react&maxResults=40&projection=lite")
		.then(res => {
			setBooks(books.concat(res.data.items))
		}).catch((err) => cl(err))
	}, [booksLen] );

	const addToCartAction = (id) => {
		let obj;
		if (cartItems[id]) {
			obj = {[id]: cartItems[id].concat(books.filter(book => book.id === id))}
		} else {
			obj = {[id]: [...books.filter(book => book.id === id)]}
		}
		setCartItems({...cartItems, ...obj});
	}

	return (
		<div>
			<Header cartItems={cartItems} books={books} />
				
			<Outlet context={{addToCartAction,totalItems: cartItems,prods: books, booksLen, state: locat.state, key: locat.key, ...locat}} />
			
			<Footer />
		</div>
	)
};

const AppRoutes = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<HomePage />}></Route>
					<Route path="products/:id" element={<SingleBookPage />}></Route>
					<Route path="checkout" element={<Checkout />}></Route>
					<Route path="cart" element={<Cart />}></Route>
				</Route>
			</Routes>
		</HashRouter>
	);
}

const root = createRoot(document.getElementById("app"));

root.render(<React.StrictMode>
	<AppRoutes />
</React.StrictMode>);