const Tooltip = ({ text, children }) => {
	
	const [opacity, setOpacity] = React.useState(false);
	const [top, setTop] = React.useState(0);
	const [left, setLeft] = React.useState(0);
	const tooltip = React.useRef(null);
	const [event, setEvent] = React.useState(null)

	const toggleTooltip = () => {
		const tooltipNodeEl = tooltip.current;
		if(event == null || event == "hover") {
			setOpacity(!opacity)
			setTop((tooltipNodeEl.offsetTop || 0) + 20)
			setLeft((tooltipNodeEl.offsetLeft || 0) - 30)
			setEvent("hover")
		}
		opacity ? setEvent("hover") : setEvent(null)
	}
	const toogleTooltipClick = () => {
		const tooltipNodeEl = tooltip.current;
		if (opacity) {
			setOpacity(!opacity)
			setTop((tooltipNodeEl.offsetTop || 0) + 20)
			setLeft((tooltipNodeEl.offsetLeft || 0) - 30)
			setEvent("click");
		} else {
			setEvent(null)
		}
		
	}
	const style = {
		top,
		left,
		opacity: +opacity,
		zIndex: opacity ? 1000 : -1000,
		position: "absolute"
	}
	return (
		<div style={{display: "inline"}} ref={tooltip} id="notip">
			<span style={{color: "blue"}} onMouseEnter={toggleTooltip} onMouseOut={toggleTooltip} onClick={toogleTooltipClick}>
				&nbsp;{children}
			</span>
			<div className="tooltip top" style={style} role="tooltip">
				<div className="tooltip-arrow"></div>
				<div className="tooltip-inner">
					{text}
				</div>
			</div>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("tooltip"));
root.render(<div>
	My Name is 
	<Tooltip text="senior software engineer with 6 years of experince in working with softwares">Ammar Massoud</Tooltip>
	I have Figured out that people like to live in <Tooltip text="complete irgularity and disoptimization">miss</Tooltip>
</div>);