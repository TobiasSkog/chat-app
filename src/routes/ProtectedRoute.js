import React from "react";
import { useOutletContext, Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ role }) => {
	const context = useOutletContext();
	console.log("context: ", context);
	if (!context.user || !context.user?.role.includes(role)) {
		return <Navigate to="/" replace />;
	}

	return <Outlet context={context} />;
};

export default ProtectedRoute;
