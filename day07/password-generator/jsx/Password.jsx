import React, { useEffect, useState } from "react";
import generatePassword from "../js/generate-password";
import { RULES as rules } from "../js/rules";

import { PasswordVisibility } from "./PasswordVisibility.jsx";
import { PasswordGenerate } from "./PasswordGenerate.jsx";
import { PasswordInfo } from "./PasswordInfo.jsx";
import { PasswordInput } from "./PasswordInput.jsx";

export const Password = (props) => {
	const [ strength, setStrength ] = useState({});
	const [ password, setPassword ] = useState("");
	const [ visible, setVisibility ] = useState(false);
	const [ ok, setOk ] = useState(false);

	const checkStrength = (e) => {
		let password = e.target.value;
		setPassword(password);
	}

	useEffect(() => {
		let strong = {};
		Object.keys(props).forEach((key, idx, lst) => {
			if (props[key] && rules[key.toUpperCase()].pattern.test(password)) {
				strong[key] = true;
			}
		})
		setStrength(strong);
	}, [password]);

	useEffect(() => {
		if (Object.keys(strength).length == Object.keys(props).length) {
			setOk(true);
		} else {
			setOk(false);
		}
	}, [strength])

	const toggleVisibility = () => {
		setVisibility(!visible);
	}

	const generateNewPass = () => {
		setPassword(generatePassword());
		setVisibility(true);
	}

	useEffect(() => {
		checkStrength({target: {value: password}});
	}, [password]);

	const proccessedRules = Object.keys(props).map(key => props[key] && {key, rule: rules[key.toUpperCase()], isCompleted: strength[key] || false})

	return (
		<div className="container">
			<div className="row d-flex align-items-center justify-content-center">
				<div className="well form-group col-md-6">
					<label htmlFor="password">Password</label>
					<PasswordInput name="password" onChange={checkStrength} visible={visible} value={password} />
					<PasswordVisibility checked={visible} onChange={toggleVisibility} />
					<PasswordInfo rules={proccessedRules} />
					<PasswordGenerate onClick={generateNewPass}>Generate New Password</PasswordGenerate>
					<button className={`btn btn-primary ${ok ? '' : 'disabled'}`} disabled={!ok}>Save My Password</button>
				</div>
			</div>
		</div>
	);
}