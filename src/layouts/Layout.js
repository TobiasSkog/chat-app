import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

export default function Layout() {
	const context = useOutletContext();

	return (
		<div>
			<NavigationBar />
			<Outlet context={context} />
		</div>
	);
}
