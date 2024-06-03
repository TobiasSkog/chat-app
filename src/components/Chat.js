import React, { useEffect, useState } from "react";
import { connection, startConnection } from "../services/singalRService";

export default function Chat({ userName }) {
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState("");
	const [user, setUser] = useState(userName);

	useEffect(() => {
		startConnection();
		connection.on("ReceiveMessage", (user, message) => {
			setMessages((prevMessages) => [...prevMessages, { user, message }]);
		});

		return () => {
			connection.off("RecieveMessage");
			connection.stop();
			setUser("");
		};
	}, []);

	const sendMessage = async () => {
		if (message.trim() === "") return;
		await connection.invoke("SendMessage", user, message);
		setMessage("");
	};

	return (
		<div>
			<h2>Chat</h2>
			<div>
				{messages.map((msg, index) => (
					<div key={index}>
						<strong>{msg.user}</strong>: {msg.message}
					</div>
				))}
			</div>
			<input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message" />
			<button onClick={sendMessage}>Send</button>
		</div>
	);
}
