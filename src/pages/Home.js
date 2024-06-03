import { useOutletContext, Link } from "react-router-dom";
export default function Home() {
	const context = useOutletContext();
	return (
		<>
			<h1>Chat Application</h1>
			{!context.user && (
				<div className="chat-container">
					<p>Please login to start chatting with your friends!</p>
					<Link to="/login">Login</Link>
					<br />
					<p>Psst, don't have an account yet? Register a new account and start out today!</p>
				</div>
			)}
			{context.user && (
				<>
					<p>Hello {context.user.username}!</p>
				</>
			)}
		</>
	);
}
