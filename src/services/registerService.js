export const serviceRegister = async (username, password, email) => {
	const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
	const response = await fetch(`${API_ENDPOINT}/auth/register`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ username, password, email }),
	});

	if (response.ok) {
		return { success: true };
	} else {
		return { success: false, message: "Failed to register a new account!" };
	}
};
