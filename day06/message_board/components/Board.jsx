const React = require("react");
const request = require("axios").default;
const url = "http://localhost:3000/messages";

const MessageList = (props) => {

	const msgs = props.messages;

	if (!messages || !messages.length>0) {
		return (
        	<p>No messages yet</p>
    	)
	}

	console.log("MessageList ", msgs)

	return (
		<div>
			<table className="table">
				<caption>Messages</caption>
				<thead>
					<tr>
						<th className="span2">Name</th>
						<th className="span10">Message</th>
					</tr>
				</thead>
				<tbody>
					{msgs.map((msg, idx) => (
						<tr key={idx}>
							<td className="span2">{msg.name}</td>
							<td className="span10">{msg.message}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

const NewMessage = ({ messages, onAddMessage }) => {
	const nameRef = React.useRef(null);
	const messageRef = React.useRef(null);

	const handleAddMessage = (e) => {
		e.preventDefault();
		let name = nameRef.current.value.trim();
		let message = messageRef.current.value.trim();
		
		if (!name || !message) {
			return console.error("Name and Message fields cannot be empty");
		}
		
		onAddMessage({
			name: name,
			message: message
		})
	}

	const sendByEnterPress = (e) => {
		e.preventDefault();
		if (e.keyCode === 13) {
			return handleAddMessage();
		}
	}

	return (
		<div className="row-fluid" id="new-message">
			<div className="span12">
				<form className="well form-inline" onKeyUp={sendByEnterPress} onSubmit={handleAddMessage}>
					<input type="text" name="username" className="input-small" placeholder="Ammar" ref={nameRef} />
					<input type="text" name="message" className="input-small" placeholder="Hello :)" ref={messageRef} />
					<button className="btn btn-primary" type="submit" id="send">Post</button>
				</form>
			</div>
		</div>
	);
}

const MessageBoard = (props) => {
	
	const [ allMessages, setAllMessages ] = React.useState([]);
	const [ messagesLen, setMessagesLen ] = React.useState(0);
	
	React.useEffect( () => {
		console.log("AllMessages: ", allMessages);
		request.get(url).then(res => {
			setAllMessages(res.data)
			setMessagesLen(res.data.length);
		}).catch((err) => {
			console.error("Error Happened", err);
		})
	}, [messagesLen] );

	const onSubmitMessage = (message) => {
		let currMessages = allMessages;
		request.post(url, message)
			.then((result) => result.data)
			.then((data) => {
				if (!data)
					return console.error("falied to save");
				console.log("Saved!");
				currMessages.unshift(data);
				setAllMessages(currMessages);
				setMessagesLen(currMessages.length);
			})
	}
	return (
		<div>
			<NewMessage onAddMessage={onSubmitMessage} messages={allMessages}></NewMessage>
			<MessageList messages={allMessages}></MessageList>
		</div>
	);
}

module.exports = MessageBoard;