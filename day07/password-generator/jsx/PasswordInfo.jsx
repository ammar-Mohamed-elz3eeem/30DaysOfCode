import React from "react";

export const PasswordInfo = (props) => {
	const listitems = props.rules.map(rule => (
		(rule.isCompleted) 
			? <li key={rule.key}><s>{rule.rule.message}</s></li> 
			: <li key={rule.key}>{rule.rule.message}</li>
	))
	return (
		<div className="">
			<h4>Password Strength</h4>
			<ul>
				{listitems}
			</ul>
		</div>
	);
};