const serialize = require("form-serialize");

const SignUp = ({firstNum, secondNum, opcode}) => {

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target);
		const data = serialize(e.target);
		console.log(data)
	}

	return (
		<div className="signup-form-wrapper form-wrapper">
			<h2>Sign up</h2>
			<form className="signup-form" method="post" onSubmit={handleSubmit}>
				<fieldset>
					<legend>Username</legend>
					<input type="text" />
				</fieldset>
				<fieldset>
					<legend>Email</legend>
					<input type="email" />
				</fieldset>
				<fieldset>
					<legend>Password</legend>
					<input type="password" />
				</fieldset>
				<fieldset>
					<legend>Confirm Password</legend>
					<input type="password" />
				</fieldset>
				<fieldset>
					<legend>you are not robot question: </legend>
					<div className="question">
						<div className="question-label">
							{`${firstNum} ${opcode} ${secondNum} = ??`}
						</div>
						<input type="text"  />
					</div>
				</fieldset>
				<button className="btn submit-btn" type="submit">Send data</button>
			</form>
		</div>
	);
}