import React from "react";

export const PasswordGenerate = (props) => {
	return (
		<button {...props} className="btn btn-secondary generate-btn">{props.children}</button>
	);
};