import React from "react";

export const PasswordInput = (props) => {
	return (
		<input className="form-control" 
			   onChange={props.onChange} 
			   type={props.visible ? 'text' : 'password'} 
			   value={props.value} 
			   name={props.name} 	
		/>
	);
};