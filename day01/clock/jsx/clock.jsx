function Clock() {
	const [clock, setClock] = React.useState(new Date().toLocaleString())

	const onUpdate = () => {
		setClock(new Date().toLocaleString());
	}

	setInterval(onUpdate, 1000)

	return (
		<div>
			<DigitalDisplay time={clock} />
			<AnalogDisplay time={clock} />
		</div>
	);
}