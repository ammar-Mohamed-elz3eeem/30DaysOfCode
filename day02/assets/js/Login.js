"use strict";

var Login = function Login(_ref) {
	var firstNum = _ref.firstNum,
	    secondNum = _ref.secondNum,
	    opcode = _ref.opcode;

	return React.createElement(
		"div",
		{ className: "login-form-wrapper form-wrapper" },
		React.createElement(
			"h2",
			null,
			"Login"
		),
		React.createElement(
			"form",
			{ className: "login-form" },
			React.createElement(
				"fieldset",
				null,
				React.createElement(
					"legend",
					null,
					"Username / Email"
				),
				React.createElement("input", { type: "text" })
			),
			React.createElement(
				"fieldset",
				null,
				React.createElement(
					"legend",
					null,
					"Password"
				),
				React.createElement("input", { type: "password" })
			),
			React.createElement(
				"fieldset",
				null,
				React.createElement(
					"legend",
					null,
					"you are not robot question: "
				),
				React.createElement(
					"div",
					{ className: "question" },
					React.createElement(
						"div",
						{ className: "question-label" },
						firstNum + " " + opcode + " " + secondNum + " = ??"
					),
					React.createElement("input", { type: "text" })
				)
			),
			React.createElement(
				"button",
				{ className: "btn submit-btn", type: "submit" },
				"Send data"
			)
		)
	);
};