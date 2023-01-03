import React from "react"
import { Password } from "./Password.jsx";
import { createRoot } from "react-dom/client";

const App = () => {
	return (
		<Password uppercase lowercase numbers specials over_6 />
	);
}

const dom = createRoot(document.getElementById("password"));
dom.render(<React.StrictMode>
	<App />
</React.StrictMode>)