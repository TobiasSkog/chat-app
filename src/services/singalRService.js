import { HubConnectionBuilder } from "@microsoft/signalr";

const token = localStorage.getItem("token");
const CHAT_HUB = process.env.REACT_APP_CHAT_HUB;
const connection = new HubConnectionBuilder()
	.withUrl(CHAT_HUB, {
		accessTokenFactory: () => token,
	})
	.withAutomaticReconnect()
	.build();

const startConnection = async () => {
	if (connection.state === "Disconnected") {
		try {
			await connection.start();
		} catch (err) {
			console.error("SignalR Connection Error:", err);
			setTimeout(() => startConnection(), 5000);
		}
	}
};
export { connection, startConnection };
