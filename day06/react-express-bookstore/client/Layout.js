import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import axios from "axios";
import { Outlet } from "react-router";
import { connect } from "react-redux";
import methods from "./redux/module";

const Layout = (props) => {

	React.useEffect(() => {
		axios.get("/books", {baseURL: "http://localhost:3000"}).then((data) => {
			props.fetchBooks(data);
		})
	}, [])

	console.log("Props of LAyout: ", props)

	return (
		<div className="container">
			<Header />
			
			<Outlet context={{stateChanged: typeof props.products == "undefined"}} />
			
			<Footer />
		</div>
	);
}

export default connect(({reducer}) => ({products: reducer.all}), {fetchBooks: methods.fetchProductsActionCreator})(Layout);