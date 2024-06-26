import React, { useState } from "react";
import { TextField, InputAdornment, IconButton, Button, Checkbox, FormControlLabel } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useOutletContext } from "react-router-dom";
import "./login.css";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [rememberMe, setRememberMe] = useState(false);
	const context = useOutletContext();

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		const response = await context.login(username, password, rememberMe);
		if (response) {
			return response;
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
				<div>
					<FormControlLabel control={<Checkbox onChange={(e) => setRememberMe(e.target.checked)} />} label="Remember me" />
				</div>
				<Button type="submit">Login</Button>
				<p>
					Don't have an account? <Link to="/register">Register</Link> a new account!
				</p>
			</form>
			<div />
		</div>
	);
}
