import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

export default function useAuth() {
  const all = useContext(AuthContext);

  return all;
}
