import { createRoot } from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { AppRoutes } from "./routes";
const reducers = require("./modules/index");

const root = createRoot(document.getElementById("app"));
root.render(<React.StrictMode>
	<Provider store={configureStore({reducer: reducers})}>
		<AppRoutes></AppRoutes>
	</Provider>
</React.StrictMode>)