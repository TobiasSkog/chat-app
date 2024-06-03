import { useOutletContext, Link } from "react-router-dom";
export default function Home() {
	const context = useOutletContext();
	return (
		<>
			<h1>Chat Application</h1>
			{!context.user && (
				<>
					<p>Please login to start chatting with your friends!</p>
					<Link to="/login">Login</Link>
					<br />
					<p>Psst, don't have an account yet? Register a new account and start out today!</p>
				</>
			)}
			{context && (
				<>
					<p>{context.user}</p>
				</>
			)}
		</>
	);
}
