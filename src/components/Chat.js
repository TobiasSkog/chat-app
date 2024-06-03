import React, { useEffect, useState } from "react";
import { connection, startConnection } from "../services/singalRService";
import { useOutletContext } from "react-router-dom";

export default function Chat({ userName }) {
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState("");
	const { user } = useOutletContext();
	const username = user.username;
	useEffect(() => {
		startConnection();
		connection.on("ReceiveMessage", (username, message) => {
			setMessages((prevMessages) => [...prevMessages, { username, message }]);
		});

		return () => {
			connection.off("RecieveMessage");
			connection.stop();
		};
	}, []);

	const sendMessage = async () => {
		if (message.trim() === "") return;
		await connection.invoke("SendMessage", username, message);
		setMessage("");
	};

	return (
		<div>
			<h2>Chat</h2>
			<div>
				{messages.map((msg, index) => (
					<div key={index}>
						<strong>{msg.username}</strong>: {msg.message}
					</div>
				))}
			</div>
			<input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message" />
			<button onClick={sendMessage}>Send</button>
		</div>
	);
}
