const React = require("react");
const ReactDOM = require("react-dom");

const Header = require("../components/Header.jsx");
const Footer = require("../components/Footer.jsx");
const Board = require("../components/Board.jsx");

ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<Footer />, document.getElementById("footer"));
ReactDOM.render(<Board messages={messages} />, document.getElementById("message-board"));