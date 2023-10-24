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
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/brandDetails/:id",
        element: <BrandDetails></BrandDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/updateproduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/productdetails/:id",
        element: (
          <PrivateRoute>
            <DetailsCard></DetailsCard>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/cart/:id",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cart/${params.id}`),
      },
    ],
  },
]);
export default router;
