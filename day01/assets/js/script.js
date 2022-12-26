const OnSlideEvent = () => {

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
			$(function () {
				$("#slider").slider();
			});
			$("#slider").on("slide", handleSlide);
			console.log("Component did mount");
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
			"Slider Integration "
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
			React.createElement(
				"button",
				{ className: "btn", onClick: handleChange(-1), disabled: soundVolume < 1 ? true : false },
				"1 Less ",
				soundVolume - 1
			),
			React.createElement(
				"button",
				{ className: "btn", onClick: handleChange(1), disabled: soundVolume > 99 ? true : false },
				"1 More ",
				soundVolume + 1
			)
		)
	);
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(React.createElement(
	React.StrictMode,
	null,
	React.createElement(OnSlideEvent, null)
));