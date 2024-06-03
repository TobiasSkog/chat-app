export const serviceUpdateUsername = async (username) => {
	const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
	const response = await fetch(`${API_ENDPOINT}/auth/updateUsername`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ username }),
	});

	if (response.ok) {
		const data = await response.json();
		return { success: true, user: data.user };
	} else {
		return { success: false };
	}
};

export const serviceUpdateEmail = async (email) => {
	const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
	const response = await fetch(`${API_ENDPOINT}/auth/updateEmail`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email }),
	});

	if (response.ok) {
		const data = await response.json();
		return { success: true, user: data.user };
	} else {
		return { success: false };
	}
};
