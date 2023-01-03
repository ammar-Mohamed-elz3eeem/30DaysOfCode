import React from "react";

export const PasswordVisibility = (props) => {
	return (
		<label className="form-control">
			<input type="checkbox" checked={props.checked} onChange={props.onChange} />
			Show Password
		</label>
	);
};