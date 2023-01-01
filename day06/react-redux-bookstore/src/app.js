import React, { useEffect } from "react"
import { connect, Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import SingleBookPage from "./components/SingleBookPage";
import reduceFunctions from "./redux/index";
import SingleBookBlock from "./components/SingleBookBlock";
import { saveState } from "./redux/localStorage";
import Cart from "./cart";
import Checkout from "./checkout";
const { fetchProductsActionCreator, addToCartActionCreator } = require("./redux/module").default
const axios = require("axios").default;
const store = configureStore({reducer: reduceFunctions});
const cl = console.log

const Home = (props) => {

	const books = props.reducer.all && props.reducer.all.map((book) => {
		return (
			<div className="col-sm-4 col-12" key={book.id}>
				<SingleBookBlock book={book} />
			</div>
		);
	})

	cl("Home props: ", props);

	return (
		<div className="container">
			<div className="row">
				{books}
			</div>
		</div>
	)
}

const HomeConnected = connect((props) => (props), {})(Home)

const App = (props) => {
	
	useEffect(() => {
		axios.get("https://www.googleapis.com/books/v1/volumes?q=react&maxResults=40&projection=lite")
		.then(res => {
			const prods = props.fetchProds(res)
		}).catch((err) => cl(err))
	}, []);
	
	return (
		<>
			<Header />
			<Outlet context={{prods: props.products}} />
			<Footer />
		</>
	);
}

const AppConnected = connect(( { reducer } ) => {
	return { products: reducer.all };
}, { fetchProds: fetchProductsActionCreator, addToCart: addToCartActionCreator })(App);

const Root = () => {
	return (
		<React.StrictMode>
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<AppConnected />}>
							<Route index element={<HomeConnected />}></Route>
							<Route path="/products/:id" element={<SingleBookPage />}></Route>
							<Route path="/cart" element={<Cart />}></Route>
							<Route path="/checkout" element={<Checkout />}></Route>
						</Route>
					</Routes>
				</BrowserRouter>
			</Provider>
		</React.StrictMode>
	);
}

const root = createRoot(document.getElementById("app"));
root.render(<Root />);
