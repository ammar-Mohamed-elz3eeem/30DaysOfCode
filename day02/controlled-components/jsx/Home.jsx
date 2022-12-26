const Home = () => {

	const operation = ['+', '*', '/', '-'][Math.round(Math.random() * 3)];
	const [session, setSession] = React.useState({});
	const [firstNum, setFirstNum] = React.useState(Math.floor(Math.random() * 10));
	const [secondNumber, setSecondNumber] = React.useState(Math.floor(Math.random() * 10));
	console.log(['+', '*', '/', '-'][Math.round(Math.random() * 3)])
	return (
		<div className="app">
			{(!session.id) 
				? <SignUp opcode={operation} firstNum={firstNum} secondNum={secondNumber} /> 
				: <Login opcode={operation} firstNum={firstNum} secondNum={secondNumber} />}
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("app"))
root.render(<Home />);