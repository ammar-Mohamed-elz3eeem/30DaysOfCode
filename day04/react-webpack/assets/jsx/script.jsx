const React = require("react");
// import React from "react";
const ReactDOM = require("react-dom");
const EmailNewsLetter = require("./content.jsx")
require("../css/bootstrap.css")
require("../css/main.css")

ReactDOM.render(<EmailNewsLetter />, document.getElementById("app"))

if (module.hot) {
	module.hot.accept();
  }