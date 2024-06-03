import { deleteTokens, setTokens } from "./tokenService";

export const serviceLogin = async (username, password) => {
	const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
	const response = await fetch(`${API_ENDPOINT}/auth/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ username, password }),
	});

	if (response.ok) {
		const data = await response.json();
		setTokens(data.accessToken, data.refreshToken);
		return { success: true, user: data.user };
	} else {
		return { success: false };
	}
};

export const serviceLogout = () => {
	deleteTokens();
};
