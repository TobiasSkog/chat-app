import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { serviceLogin, serviceLogout } from "../services/loginService";
import { serviceRegister } from "../services/registerService";
import { serviceUpdateEmail, serviceUpdateUsername } from "../services/updateUserInfoService";

export default function Root() {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	const updateUsername = async (username) => {
		const result = await serviceUpdateUsername(username);
		if (result.success) {
			const user = result.user;
			setUser({ id: user.id, username: user.username, email: user.email, role: user.role });
			navigate("/chat");
		} else {
			alert(result.message);
		}
	};
	const updateEmail = async (email) => {
		const result = await serviceUpdateEmail(email);
		if (result.success) {
			const user = result.user;
			setUser({ id: user.id, username: user.username, email: user.email, role: user.role });
			navigate("/chat");
		} else {
			alert(result.message);
		}
	};

	const login = async (username, password, rememberMe) => {
		const result = await serviceLogin(username, password, rememberMe);
		if (result.success) {
			const user = result.user;
			setUser({ id: user.id, username: user.username, email: user.email, role: user.role });
			navigate("/chat");
		} else {
			alert(result.message);
		}
	};
	const register = async (username, password, email) => {
		const result = await serviceRegister(username, password, email);
		if (result.success) {
			navigate("/login");
		} else {
			alert(result.message);
		}
	};
	const logout = () => {
		serviceLogout();
		setUser(null);
	};

	return <Outlet context={{ user, setUser, login, logout, register, updateEmail, updateUsername }} />;
}
