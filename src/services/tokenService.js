const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
export const getAccessToken = () => localStorage.getItem("token");
export const getRefreshToken = () => localStorage.getItem("refreshToken");

export const setTokens = (accessToken, refreshToken) => {
	localStorage.setItem("token", accessToken);
	localStorage.setItem("refreshToken", refreshToken);
};
export const deleteTokens = () => {
	localStorage.removeItem("token");
	localStorage.removeItem("refreshToken");
};

export const refreshToken = async () => {
	const refreshToken = getRefreshToken();
	const response = await fetch(`${API_ENDPOINT}/auth/refresh`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ refreshToken }),
	});

	if (!response.ok) {
		throw new Error("Failed to refres token.");
	}

	const data = await response.json();
	setTokens(data.accessToken, data.refreshToken);
	return data.accessToken;
};
