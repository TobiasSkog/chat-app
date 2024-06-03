// import React, { createContext, useState, useContext } from "react";
// import { serviceLogin, serviceLogout } from "../services/loginService";
// const AuthContext = createContext();

// export const useAuth = () => {
// 	return useContext(AuthContext);
// };

// export const AuthProvider = ({ children }) => {
// 	const [user, setUser] = useState(null);

// 	const login = async (username, password) => {
// 		const result = await serviceLogin(username, password);
// 		if (result.success) {
// 			setUser(result.user);
// 		} else {
// 			alert(result.message);
// 		}
// 	};

// 	const logout = () => {
// 		serviceLogout();
// 		setUser(null);
// 	};

// 	return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
// };
