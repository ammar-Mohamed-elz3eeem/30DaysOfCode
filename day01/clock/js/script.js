const onSlideEvent = () => {

	const [soundVolume, setSoundVolume] = React.useState(0);

	const handleSlide = (event, ui) => {
		setSoundVolume(ui.value);
	};

	const handleChange = num => {
		return () => {
			$("#slider").slider("value", soundVolume + num);
			setSoundVolume(soundVolume + num);
		};
	};

	React.useEffect(() => {
		let mounted = true;
		if (mounted) {
			$("#slider").on("slide", handleSlide);
		}
		return () => {
			mounted = false;
			$("#slider").off("slide", handleSlide);
			console.log("Component will unmount");
		};
	}, []);

	return React.createElement(
		"div",
		{ className: "pageContent" },
		React.createElement(
			"h2",
			null,
			"Slider Integration"
		),
		React.createElement("div", { id: "slider" }),
		React.createElement(
			"span",
			null,
			"Value ",
			soundVolume
		),
		React.createElement(
			"div",
			{ className: "buttons" },
			React.createElement("button", { className: "btn", disabled: soundVolume < 1 ? true : false })
		)
	);
};