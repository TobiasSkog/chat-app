import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import ChatRoom from "../pages/ChatRoom";
import NotFound from "../pages/NotFound";
import Layout from "../layouts/Layout";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				element: <Layout />,
				children: [
					{
						path: "/",
						element: <Home />,
						index: true,
					},
					{
						path: "/home",
						element: <Home />,
					},
					{
						path: "/login",
						element: <Login />,
					},
					{
						path: "/register",
						element: <Register />,
					},
					{
						element: <ProtectedRoute role="User" />,
						children: [
							{
								path: "/chat",
								element: <ChatRoom />,
							},
							{
								path: "/profile",
								element: <Profile />,
							},
							{
								path: "/editprofile",
								element: <EditProfile />,
							},
						],
					},
					{
						path: "*",
						element: <NotFound />,
					},
				],
			},
		],
	},
]);

export default router;
