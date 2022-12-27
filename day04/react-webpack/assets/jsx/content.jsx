const { useState } = require("react");
const React = require("react");

const EmailNewsLetter = () => {

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email.current.value, comments.current.value)
	}

	const email = React.useRef(null);
	const comments = React.useRef(null);

	const [counter, setCounter] = useState(0);

	const handleClick = () => {
		setCounter(counter + 1)
	}

	return (
		<div className="form-wrapper">
			<button onClick={handleClick}>Counter</button>
			<h4>have been clicked clicked {counter} times</h4>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend> Address</legend>
					<input type="email" ref={email} />
				</fieldset>
				<fieldset>
					<legend>Comments</legend>
					<textarea cols="60" rows="10" ref={comments}></textarea>
				</fieldset>
				<button className="btn btn-primary" type="submit">Send data</button>
			</form>
		</div>
	);
}

module.exports = EmailNewsLetter