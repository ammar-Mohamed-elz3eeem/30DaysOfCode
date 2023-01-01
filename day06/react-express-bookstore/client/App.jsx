import React from "react";
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux";
import AppRoutes from "./AppRoutes";
import { configureStore } from "@reduxjs/toolkit"
import { reduceFunctions } from "./redux/index";
import { render } from "react-dom";

const App = () => {
	return (
		<Provider store={configureStore({reducer: reduceFunctions})}>
			<AppRoutes></AppRoutes>
		</Provider>
	);
}

const root = createRoot(document.getElementById("app"));

root.render(<React.StrictMode>
	<App />
</React.StrictMode>);