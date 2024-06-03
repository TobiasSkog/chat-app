import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import ChatRoom from "../pages/ChatRoom";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <Home />,
				index: true,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				element: <ProtectedRoute role="User" />,
				children: [
					{
						path: "/chat",
						element: <ChatRoom />,
					},
					// {
					// 	path: "/profile",
					// 	element: <Profile />,
					// },
					// {
					// 	path: "/editprofile",
					// 	element: <EditProfile />,
					// },
				],
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);

export default router;
