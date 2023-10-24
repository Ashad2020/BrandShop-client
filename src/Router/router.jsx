import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import SingUp from "../pages/Login/SingUp";
import SignIn from "../pages/Login/SignIn";
import AddProduct from "../pages/AddProduct/AddProduct";
import BrandDetails from "../pages/BrandDetails/BrandDetails";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import DetailsCard from "../components/ProductDetails/DetailsCard";
import Cart from "../pages/Cart/Cart";

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
      {
        path: "/brandDetails/:id",
        element: <BrandDetails></BrandDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/updateproduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/productdetails/:id",
        element: <DetailsCard></DetailsCard>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/cart/:id",
        element: <Cart></Cart>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cart/${params.id}`),
      },
    ],
  },
]);
export default router;
