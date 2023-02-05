import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layouts/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Instrutors from "./pages/Instrutors";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import NotFound from "./pages/NotFound";

export default function App() {
  const router = createBrowserRouter([
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
          path: "instrutors",
          element: <Instrutors />,
        },
        {
          path: "courses",
          element: <Courses />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "sign-up",
          element: <SignUp />,
        },
        {
          path: "log-in",
          element: <LogIn />,
        },
      ],
    },
  ]);
  return (
    <div className="font-Poppins bg-solitude">
      <RouterProvider router={router} />
    </div>
  );
}
