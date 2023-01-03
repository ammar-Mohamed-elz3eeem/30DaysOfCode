import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import clean from "clean-tagged-string";

function AutoComplete(props) {

	const [ rooms, setRooms ] = useState([]);
	const [ filteredOptions, setFilteredOptions ] = useState([]);
	const [ currentOption, setCurrentOption ] = useState("");
	const filterMenu = React.useRef(null);

	console.log(props.url);

	useEffect(() => {
		if (currentOption.length >= 2) {
			const query = clean`{
				rooms (name: \"${currentOption}\") {
					_id,
					name,
					room_users
				}
			}`
			axios.get(`/q?query=${query}`)
				.then((response) => { setRooms(response.data.data.rooms) })
				.catch(err => console.error(err));
		}
	}, [currentOption])

	const filter = (e) => {
		setCurrentOption(e.target.value);
		if (currentOption.length >= 2) {
			filterMenu.current.classList.remove("hidden");
			console.log("Rooms: ", rooms);
			const filterOptions = rooms.filter((option, index, list) => option.name);
			setFilteredOptions(filterOptions);
		}
	}

	const addOption = (e) => {
		let currentOpt = e.target.value;
		axios.post(props.url, {name: currentOpt})
			.then(response => response.data)
			.then(data => data 
				? setRooms([data].concat(rooms)) && filter({target: {value: currentOpt}}) 
				: console.error("failed to save"))
			.catch(error => console.error("Failed to Save", error))
	}

	const filteredOptionsUI = filteredOptions && filteredOptions.map(opt => (
		<div key={opt._id}>
			<a className="btn btn-default btn-primary btn-block option-list-item" href={`/#${opt.name}`}>
				#{opt.name}
			</a>
		</div>
	));

	const addOptionUi = <a className="btn btn-info btn-primary btn-block" onClick={() => addOption({target: {value: currentOption}})}> Add #{currentOption} </a>

	return (
		<div className="form-group">
			<input type="text" 
				   onKeyUp={(event) => (event.keyCode == 13) ? addOption(event) : ''} 
				   className="form-control option-name"
				   onChange={filter}
				   value={currentOption}
				   placeholder="Enter Room name"
				   name="room_name"
			/>
			{
				currentOption.length >= 2 
				? <div className="hidden" ref={filterMenu}>
					{currentOption != '' && filteredOptions && filteredOptions.length <= 0 ? addOptionUi : filteredOptionsUI}
				</div>
				: <></>
			}
		</div>
	);
}

export default AutoComplete