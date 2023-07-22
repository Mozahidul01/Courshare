import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home";
import About from "../pages/About";
import Instructor from "../pages/Instructor";
import Courses from "../pages/Courses";
import Dashboard from "../pages/Dashboard";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import ForgetPassword from "../pages/ForgetPassword";
import NotFound from "../pages/NotFound";
import Maintenance from "../components/Maintenance";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <NotFound />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "instructor",
				element: <Instructor />,
			},
			{
				path: "instructor/:name",
				element: <Maintenance />,
			},
			{
				path: "courses",
				element: <Courses />,
			},
			{
				path: "courses/:tittle",
				element: <Maintenance />,
			},
			{
				path: "sign-up",
				element: <SignUp />,
			},
			{
				path: "log-in",
				element: <LogIn />,
			},
			{
				path: "forget-password",
				element: <ForgetPassword />,
			},
			{
				path: "dashboard",
				element: (
					<PrivateRoute>
						<Dashboard />,
					</PrivateRoute>
				),
			},
			{
				path: "profile",
				element: (
					<PrivateRoute>
						<Profile />,
					</PrivateRoute>
				),
			},
		],
	},
]);
