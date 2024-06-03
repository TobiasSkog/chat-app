import Chat from "../components/Chat";

export default function ChatRoom() {
	return (
		<div>
			<h2>Chat Room: "ChatRoomName"</h2>
			{/* <p>Connected as: {user.username}</p> */}
			<br />
			<Chat />
		</div>
	);
}
