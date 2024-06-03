import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import { serviceLogin, serviceLogout } from "../services/loginService";

const Root = () => {
	const [user, setUser] = useState(null);

	const login = async (username, password) => {
		const result = await serviceLogin(username, password);
		if (result.success) {
			setUser(result.user);
		} else {
			alert(result.message);
		}
	};

	const logout = () => {
		serviceLogout();
		setUser(null);
	};

	return (
		<div style={{ width: "400px" }}>
			<NavigationBar login={login} user={user} logout={logout} />
			<div>
				<p>Content</p>
			</div>

			<Outlet context={{ user, setUser, login, logout }} />
		</div>
	);
};

export default Root;
