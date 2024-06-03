import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./components/Chat";

export default function CustomRoutes() {
	<Router>
		<Routes>
			<Route exact path="/" component={Chat} />
		</Routes>
	</Router>;
}
