'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Home = function Home() {

	var operation = ['+', '*', '/', '-'][Math.round(Math.random() * 3)];

	var _React$useState = React.useState({}),
	    _React$useState2 = _slicedToArray(_React$useState, 2),
	    session = _React$useState2[0],
	    setSession = _React$useState2[1];

	var _React$useState3 = React.useState(Math.floor(Math.random() * 10)),
	    _React$useState4 = _slicedToArray(_React$useState3, 2),
	    firstNum = _React$useState4[0],
	    setFirstNum = _React$useState4[1];

	var _React$useState5 = React.useState(Math.floor(Math.random() * 10)),
	    _React$useState6 = _slicedToArray(_React$useState5, 2),
	    secondNumber = _React$useState6[0],
	    setSecondNumber = _React$useState6[1];

	console.log(['+', '*', '/', '-'][Math.round(Math.random() * 3)]);
	return React.createElement(
		'div',
		{ className: 'app' },
		!session.id ? React.createElement(SignUp, { opcode: operation, firstNum: firstNum, secondNum: secondNumber }) : React.createElement(Login, { opcode: operation, firstNum: firstNum, secondNum: secondNumber })
	);
};

var root = ReactDOM.createRoot(document.getElementById("app"));
root.render(React.createElement(Home, null));