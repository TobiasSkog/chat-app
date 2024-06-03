import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";

export default function NavigationBar() {
	const { user, logout } = useAuth();

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" style={{ flexGrow: 1 }}>
					Chat App
				</Typography>
				{user ? (
					<>
						<Typography variant="h6">{user.username}</Typography>
						<Button color="inherit" onClick={logout}>
							Logout
						</Button>
					</>
				) : (
					<Button color="inherit" href="/login">
						Login
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
}
