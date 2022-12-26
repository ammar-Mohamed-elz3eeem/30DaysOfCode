function AnalogDisplay({ time }) {
	let date = new Date(time);
	return React.createElement(
		'div',
		null,
		React.createElement(
			'div',
			{ style: {
					position: 'relative',
					top: 0,
					left: 0,
					width: 200,
					height: 200,
					borderRadius: 200000,
					'border': '3px solid black'
				} },
			React.createElement('div', { style: {
					position: 'relative',
					top: 100,
					left: 100,
					'border': '1px solid red',
					'width': "40%",
					"height": 1,
					"transform": `rotate(${(date.getSeconds() / 60 * 360 - 90).toString()}deg)`,
					"transformOrigin": "0% 0%",
					"backgroundColor": "red"
				} }),
			React.createElement('div', { style: {
					position: 'relative',
					top: 100,
					left: 100,
					'border': '1px solid grey',
					'width': "40%",
					"height": 3,
					"transform": `rotate(${(date.getMinutes() / 60 * 360 - 90).toString()}deg)`,
					"transformOrigin": "0% 0%",
					"backgroundColor": "grey"
				} }),
			React.createElement('div', { style: {
					position: 'relative',
					top: 92,
					left: 106,
					'border': '1px solid grey',
					'width': "20%",
					"height": 7,
					"transform": `rotate(${(date.getHours() / 12 * 360 - 90).toString()}deg)`,
					"transformOrigin": "0% 0%",
					"backgroundColor": "grey"
				} })
		)
	);
}