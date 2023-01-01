import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SingleBookTemplate from "./components/SingleBookTemplate";
import Layout from "./Layout";
import AddNewBook from "./pages/AddNewBook";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />}></Route>
					<Route path="checkout" element={<Checkout />}></Route>
					<Route path="cart" element={<Cart />}></Route>
					<Route path="products/:id" element={<SingleBookTemplate />}></Route>
					<Route path="add-book" element={<AddNewBook />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;