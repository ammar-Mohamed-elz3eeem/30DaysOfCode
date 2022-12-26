function Clock() {
	const [clock, setClock] = React.useState(new Date().toLocaleString());

	const onUpdate = () => {
		setClock(new Date().toLocaleString());
	};

	setInterval(onUpdate, 1000);

	return React.createElement(
		"div",
		null,
		React.createElement(DigitalDisplay, { time: clock }),
		React.createElement(AnalogDisplay, { time: clock })
	);
}