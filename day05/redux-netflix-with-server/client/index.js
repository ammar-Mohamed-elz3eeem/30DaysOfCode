import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRoutes from "./Routes";
import { createStore } from "redux";
import reducers from "./modules";

const App = () => (
		<Provider store={createStore(reducers)}>
			<AppRoutes></AppRoutes>
		</Provider>
);

render(<App />, document.getElementById("app"))