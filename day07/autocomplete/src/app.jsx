const React = require("react");
const ReactDOM = require("react-dom");

import AutoComplete from "./AutoComplete.jsx";
const { rooms, url } = window.__autocomplete_data;

ReactDOM.render(<AutoComplete options={rooms} url={url} />, document.getElementById("autocomplete"));