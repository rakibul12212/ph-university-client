import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminRoutes } from "./admin.routes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/admin",
    element: <App></App>,
    children: adminRoutes,
  },
  {
    path: "/faculty",
    element: <App></App>,
    children: adminRoutes,
  },
  {
    path: "/student",
    element: <App></App>,
    children: adminRoutes,
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
export default router;
