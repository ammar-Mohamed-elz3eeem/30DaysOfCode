"use strict";

var serialize = require("form-serialize");

var SignUp = function SignUp(_ref) {
	var firstNum = _ref.firstNum,
	    secondNum = _ref.secondNum,
	    opcode = _ref.opcode;


	var handleSubmit = function handleSubmit(e) {
		e.preventDefault();
		console.log(e.target);
		var data = serialize(e.target);
		console.log(data);
	};

	return React.createElement(
		"div",
		{ className: "signup-form-wrapper form-wrapper" },
		React.createElement(
			"h2",
			null,
			"Sign up"
		),
		React.createElement(
			"form",
			{ className: "signup-form", method: "post", onSubmit: handleSubmit },
			React.createElement(
				"fieldset",
				null,
				React.createElement(
					"legend",
					null,
					"Username"
				),
				React.createElement("input", { type: "text" })
			),
			React.createElement(
				"fieldset",
				null,
				React.createElement(
					"legend",
					null,
					"Email"
				),
				React.createElement("input", { type: "email" })
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
					"Confirm Password"
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