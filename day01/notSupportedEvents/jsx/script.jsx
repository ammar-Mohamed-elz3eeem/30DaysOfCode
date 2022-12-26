const OnSlideEvent = () => {

	const [soundVolume, setSoundVolume] = React.useState(0);

	const handleSlide = (event, ui) => {
		setSoundVolume(ui.value)
	}

	const handleChange = (num) => {
		return () => {
			$("#slider").slider("value", soundVolume + num)
			setSoundVolume(soundVolume + num)
		}
	}

	
	React.useEffect(() => {
		let mounted = true;
		if (mounted) {
			$(function() {
				$( "#slider" ).slider();
		      	});
			$("#slider").on("slide", handleSlide);
			console.log("Component did mount");
		}
		return () => {
			mounted = false;
			$("#slider").off("slide", handleSlide);
			console.log("Component will unmount")
		}
	}, [])

	return (
		<div className="pageContent">
			<h2>Slider Integration </h2>
			<div id="slider"></div>
			<span>Value {soundVolume}</span>
			<div className="buttons">
				<button className="btn" onClick={handleChange(-1)} disabled={soundVolume < 1 ? true : false}>
					1 Less {soundVolume - 1}
				</button>
				<button className="btn" onClick={handleChange(1)} disabled={soundVolume > 99 ? true : false}>
					1 More {soundVolume + 1}
				</button>
			</div>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
	<React.StrictMode>
		<OnSlideEvent />
	</React.StrictMode>
)