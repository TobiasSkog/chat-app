import axios from "axios";
import { getAccessToken, refreshToken } from "../services/tokenService";
const API_URI = process.env.REACT_APP_API_URI;
const api = axios.create({
	baseURL: API_URI,
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.request.use(
	async (config) => {
		let token = getAccessToken();
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

api.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;
		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
			try {
				const newToken = await refreshToken();
				axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
				return api(originalRequest);
			} catch (refreshError) {
				return Promise.reject(refreshError);
			}
		}
		return Promise.reject(error);
	}
);

export default api;
