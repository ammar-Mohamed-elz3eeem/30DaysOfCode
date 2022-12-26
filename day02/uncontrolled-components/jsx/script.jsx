const EmailNewsLetter = () => {

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email.current.value, comments.current.value)
	}

	const email = React.useRef("");
	const comments = React.useRef("");

	return (
		<div className="form-wrapper">
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend>Email Address</legend>
					<input type="email" ref={email} />
				</fieldset>
				<fieldset>
					<legend>Comments</legend>
					<textarea cols="60" rows="10" ref={comments}></textarea>
				</fieldset>
				<button className="btn" type="submit">Send data</button>
			</form>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("app"))
root.render(
	<React.StrictMode>
		<EmailNewsLetter />
	</React.StrictMode>
)