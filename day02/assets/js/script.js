"use strict";

var EmailNewsLetter = function EmailNewsLetter() {

	var handleSubmit = function handleSubmit(e) {
		e.preventDefault();
		console.log(email.current.value, comments.current.value);
	};

	var email = React.useRef("");
	var comments = React.useRef("");

	return React.createElement(
		"div",
		{ className: "form-wrapper" },
		React.createElement(
			"form",
			{ onSubmit: handleSubmit },
			React.createElement(
				"fieldset",
				null,
				React.createElement(
					"legend",
					null,
					"Email Address"
				),
				React.createElement("input", { type: "email", ref: email })
			),
			React.createElement(
				"fieldset",
				null,
				React.createElement(
					"legend",
					null,
					"Comments"
				),
				React.createElement("textarea", { cols: "60", rows: "10", ref: comments })
			),
			React.createElement(
				"button",
				{ className: "btn", type: "submit" },
				"Send data"
			)
		)
	);
};

var root = ReactDOM.createRoot(document.getElementById("app"));
root.render(React.createElement(
	React.StrictMode,
	null,
	React.createElement(EmailNewsLetter, null)
));