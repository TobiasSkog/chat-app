import React from "react";
import { MenuItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const pages = {
	Home: "Home",
	Chat: "Chat",
};
export const settings = {
	Profile: "Profile",
	Account: "Account",
	Dashboard: "Dashboard",
	Logout: "Logout",
	Login: "Login",
};

export const MenuItemComponent = ({ menuKey, menuValue, onClickAction }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		if (onClickAction) {
			onClickAction();
		} else {
			NavigationEndPoint(menuKey);
		}
	};
	const NavigationEndPoint = (key) => {
		switch (key) {
			case settings.Profile:
				return navigate("/profile");
			case settings.Account:
				return navigate("/account");
			case settings.Dashboard:
				return navigate("/dashboard");
			case settings.Logout:
				return navigate("/logout");
			case settings.Login:
				return navigate("/login");
			case pages.Home:
				return navigate("/");
			case pages.Chat:
				return navigate("/chat");
			default:
				return navigate("/");
		}
	};
	return (
		<MenuItem onClick={handleClick}>
			<Typography textAlign="center">{menuValue}</Typography>
		</MenuItem>
	);
};
