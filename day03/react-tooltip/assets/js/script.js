const Tooltip = ({ text, children }) => {

	const [opacity, setOpacity] = React.useState(false);
	const [top, setTop] = React.useState(0);
	const [left, setLeft] = React.useState(0);
	const tooltip = React.useRef(null);
	const [event, setEvent] = React.useState(null);

	const toggleTooltip = () => {
		const tooltipNodeEl = tooltip.current;
		if (event == null || event == "hover") {
			setOpacity(!opacity);
			setTop((tooltipNodeEl.offsetTop || 0) + 20);
			setLeft((tooltipNodeEl.offsetLeft || 0) - 30);
			setEvent("hover");
		}
		opacity ? setEvent("hover") : setEvent(null);
	};
	const toogleTooltipClick = () => {
		const tooltipNodeEl = tooltip.current;
		if (opacity) {
			setOpacity(!opacity);
			setTop((tooltipNodeEl.offsetTop || 0) + 20);
			setLeft((tooltipNodeEl.offsetLeft || 0) - 30);
			setEvent("click");
		} else {
			setEvent(null);
		}
	};
	const style = {
		top,
		left,
		opacity: +opacity,
		zIndex: opacity ? 1000 : -1000,
		position: "absolute"
	};
	return React.createElement(
		"div",
		{ style: { display: "inline" }, ref: tooltip, id: "notip" },
		React.createElement(
			"span",
			{ style: { color: "blue" }, onMouseEnter: toggleTooltip, onMouseOut: toggleTooltip, onClick: toogleTooltipClick },
			"\xA0",
			children
		),
		React.createElement(
			"div",
			{ className: "tooltip top", style: style, role: "tooltip" },
			React.createElement("div", { className: "tooltip-arrow" }),
			React.createElement(
				"div",
				{ className: "tooltip-inner" },
				text
			)
		)
	);
};

const root = ReactDOM.createRoot(document.getElementById("tooltip"));
root.render(React.createElement(
	"div",
	null,
	"My Name is",
	React.createElement(
		Tooltip,
		{ text: "senior software engineer with 6 years of experince in working with softwares" },
		"Ammar Massoud"
	),
	"I have Figured out that people like to live in ",
	React.createElement(
		Tooltip,
		{ text: "complete irgularity and disoptimization" },
		"miss"
	)
));