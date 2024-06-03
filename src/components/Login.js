import React, { useState } from "react";
import { TextField, InputAdornment, IconButton, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { login } from "../services/loginService";
import { useAuth } from "../contexts/AuthContext";
import "./login.css";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const { login: authLogin } = useAuth();

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		const result = await login(username, password);
		if (result.success) {
			authLogin({ username });
		} else {
			alert(result.message);
		}
	};

	return (
		<div className="login-container">
			<h2>Login</h2>
			<form className="login-form" onSubmit={handleLogin}>
				<div>
					<TextField label="Enter your Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
				</div>
				<div>
					<TextField
						label="Enter your Password"
						type={showPassword ? "text" : "password"}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton onClick={handleClickShowPassword}>{showPassword ? <Visibility /> : <VisibilityOff />}</IconButton>
								</InputAdornment>
							),
						}}
					/>
				</div>
				<Button type="submit">Login</Button>
			</form>
			<div />
		</div>
	);
}
