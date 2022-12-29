import React from "react";
import { connect } from "react-redux";
const styles = require("./app.css");
import { Outlet } from "react-router-dom";

const App = (props) => (
	<div className={styles.app}>
		<Outlet />
	</div>
);

module.exports = connect()(App);