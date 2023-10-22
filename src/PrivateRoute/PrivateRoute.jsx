import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ children }) {
  let { user, loading } = useAuth();
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (!user?.email) {
    return <Navigate to="/login" />;
  }
  return children;
}
