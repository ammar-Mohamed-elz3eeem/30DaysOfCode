/**
 * TODO: Modify the final version of this project to use 5, 10, and 15 minutes, rather than seconds.
 * TODO: Refactor the project to have four files—timer.jsx, timer-label.jsx, timer-button.jsx, 
 * 	 and timer-sound.jsx—with as much loose coupling as possible.
 * TODO: Implement a slider button that changes with every time interval (chapter 6 discusses slider integration)
 */

class TimerWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {timer: null, timeLeft:null, initialTimer: null};
		this.startTimer = this.startTimer.bind(this);
		this.pause = this.pause.bind(this);
		this.resume = this.resume.bind(this);
		this.cancel = this.cancel.bind(this);
		this.reset = this.reset.bind(this);
	}

	startTimer(timeLeft) {
		this.setState({initialTimer: timeLeft})
		clearInterval(this.state.timer);
		let timer = setInterval(() => {
			var timeLeft = this.state.timeLeft - 1;
			if (timeLeft == 0) clearInterval(timer);
			this.setState({timeLeft: timeLeft})
		}, 1000)
		return this.setState({timer: timer, timeLeft: timeLeft});
	}

	pause() {
		clearInterval(this.state.timer);
	}

	resume() {
		var timeLeft = this.state.timeLeft;
		let timer = setInterval(() => {
			var timeLeft = this.state.timeLeft - 1;
			if (timeLeft == 0) clearInterval(timer);
			this.setState({timeLeft: timeLeft})
		}, 1000)
		return this.setState({timer: timer, timeLeft: timeLeft});
	}

	cancel() {
		clearInterval(this.state.timer);
		this.setState({timer: null, timeLeft: null})
	}

	reset(timeLeft) {
		this.startTimer(timeLeft)
	}

	render() {
		if (this.state.timeLeft == 0) {
			document.getElementById("end-of-timer").play();
		}
		return (
			<div className="timer-wrapper">
				<h2 className="timer-heading">Timer</h2>
				<div className="btn-group" role="group">
					<Button time={5} handleClick={this.startTimer}>5 Seconds</Button>
					<Button time={10} handleClick={this.startTimer}>10 Seconds</Button>
					<Button time={15} handleClick={this.startTimer}>15 Seconds</Button>
					<Button handleClick={this.pause}>Pause</Button>
					<Button handleClick={this.resume}>Resume</Button>
					<Button handleClick={this.cancel}>Cancel</Button>
					<Button time={this.state.initialTimer} handleClick={this.reset}>Reset</Button>
				</div>
				<Timer timeLeft={this.state.timeLeft} />
				<audio id="end-of-timer" src="/ch11_timer_flute_c_long_01.wav" preload="auto" />
			</div>
		);
	}
}

const Timer = ({ timeLeft }) => {
	return (timeLeft == 0 || timeLeft == null) 
	? <div></div> 
	: <h1>Time Left: {timeLeft}</h1>
};

const Button = ({ children, handleClick, time }) => {
	
	const onStartTimer = () => {
		handleClick(time);
	}

	return (
		<button data-timer={time} className="btn btn-secondary" onClick={onStartTimer}>{children}</button>
	);

};

// class Timer extends React.Component {
// 	render() {
// 		if (this.props.timeLeft == 0) {
// 			document.getElementById("end-of-timer").play();
// 		}
// 		return (this.props.timeLeft == 0 || this.props.timeLeft == null) 
// 		? <div></div> 
// 		: <h1>Time Left: {this.props.timeLeft}</h1>
// 	}
// }

// class Button extends React.Component {
// 	render() {
// 		return (
// 			<button className="btn btn-secondary" onClick={this.props.handleClick.bind(null, this.props.time)}>{this.props.time} seconds</button>
// 		);
// 	}
// }

const root = ReactDOM.createRoot(document.getElementById("timer-app"));
root.render(<TimerWrapper />)