import Chat from "../components/Chat";
import { useOutletContext } from "react-router-dom";
export default function ChatRoom() {
	const { user } = useOutletContext();
	return (
		<div>
			<h2>Chat Room: "ChatRoomName"</h2>
			<p>
				Connected as: <strong>{user.username}</strong>
			</p>
			<br />
			<Chat />
		</div>
	);
}
