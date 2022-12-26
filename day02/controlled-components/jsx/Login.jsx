const Login = ({firstNum, secondNum, opcode}) => {
	return (
		<div className="login-form-wrapper form-wrapper">
			<h2>Login</h2>
			<form className="login-form">
				<fieldset>
					<legend>Username / Email</legend>
					<input type="text" />
				</fieldset>
				<fieldset>
					<legend>Password</legend>
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