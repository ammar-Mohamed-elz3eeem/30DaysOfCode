import React, { useState } from "react";
const ReactDOM = require("react-dom");
import Router from "./Router.jsx";
import { hot } from 'react-hot-loader/root';

const App = () => {

	const mapping = {
		'#profile': <div>Profile: (<a href="#">Home</a>) </div>,
		'#accounts': <div>Accounts: (<a href="#">Home</a>) </div>,
		'*': <div>Dashboard <br />
			<a href="#profile">Profile</a>
			<br />
			<a href="#accounts">Accounts</a>
		</div>
	}

	return (
		<div className="App">
			<div className="menu">
				<Router mapping={mapping} />
			</div>
		</div>
	);

}

ReactDOM.render(<App />, document.getElementById("app"))