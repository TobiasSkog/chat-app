import React, { useState } from "react";
import { TextField, InputAdornment, IconButton, Button, Checkbox, FormControlLabel } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useOutletContext } from "react-router-dom";
import "./login.css";

export default function Register() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");
	const context = useOutletContext();

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		const response = await context.register(username, password, email);
		if (response) {
			return response;
		}
	};

	return (
		<div className="login-container">
			<h2>Register</h2>
			<form className="login-form" onSubmit={handleRegister}>
				<div>
					<TextField label="Enter a Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
				</div>
				<div>
					<TextField
						label="Enter a Password"
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
					<TextField label="Enter your Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>
				<Button type="submit">Register</Button>
			</form>
			<div />
			<div>
				<p>
					Already got an account? <Link to="/login">Login!</Link>
				</p>
			</div>
		</div>
	);
}
