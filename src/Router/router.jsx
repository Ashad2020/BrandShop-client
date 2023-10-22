import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import SingUp from "../pages/Login/SingUp";
import SignIn from "../pages/Login/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/signup",
        element: <SingUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);
export default router;
