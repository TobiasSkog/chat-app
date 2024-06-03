// import React, { useState } from "react";
// import { setTokens, getAccessToken, getRefreshToken, deleteTokens } from "../services/tokenService";
// import { TextField, InputAdornment, IconButton, Button } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// //import { Button } from "@mui/material";

// export default function Register() {
// 	const [username, setUsername] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [email, setEmail] = useState("");
// 	const [showPassword, setShowPassword] = useState(false);
// 	const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
// 	const handleClickShowPassword = () => {
// 		setPassword(!password);
// 	};

// 	const handleRegister = async (e) => {
// 		e.preventDefault();
// 		const response = await fetch(`${API_ENDPOINT}/auth/register`, {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify({ username, email, password }),
// 		});

// 		const data = await response.json();
// 		if (response.ok) {
// 		} else {
// 			alert("Register failed");
// 		}
// 	};

// 	return (
// 		<div>
// 			<h2>Register</h2>
// 			<form onSubmit={handleRegister}>
// 				<div>
// 					<TextField label="Enter your Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
// 				</div>
// 				<div>
// 					<TextField label="Enter your Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
// 				</div>
// 				<div>
// 					<TextField
// 						label="Enter your Password"
// 						type={showPassword ? "text" : "password"}
// 						value={password}
// 						onChange={(e) => setPassword(e.target.value)}
// 						InputProps={{
// 							endAdornment: (
// 								<InputAdornment position="end">
// 									<IconButton onClick={handleClickShowPassword}>{showPassword ? <Visibility /> : <VisibilityOff />}</IconButton>
// 								</InputAdornment>
// 							),
// 						}}
// 					/>
// 				</div>
// 				<Button type="submit">Login</Button>
// 			</form>
// 		</div>
// 	);
// }
