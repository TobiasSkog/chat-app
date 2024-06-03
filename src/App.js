import React from "react";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Login from "./components/Login";
import Chat from "./components/Chat";
import NavigationBar from "./components/NavigationBar";
import { getAccessToken, getRefreshToken } from "./services/tokenService";

export default function App() {
	const { user } = useAuth();

	return (
		<AuthProvider>
			<NavigationBar />
			<div>
				{!user ? (
					<Login />
				) : (
					<>
						<p>Logged in successfully!</p>
						<p>Token: {getAccessToken()}</p>
						<p>Refresh Token: {getRefreshToken()}</p>
						<br />
						<Chat />
					</>
				)}
			</div>
		</AuthProvider>
	);
}
