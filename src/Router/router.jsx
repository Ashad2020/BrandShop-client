import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import SingUp from "../pages/Login/SingUp";
import SignIn from "../pages/Login/SignIn";
import AddProduct from "../pages/AddProduct/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/brand`),
      },
      {
        path: "/signup",
        element: <SingUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>,
      },
    ],
  },
]);
export default router;
