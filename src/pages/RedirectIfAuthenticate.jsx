import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function RedirectIfAuthenticate({ children }) {
  const values = useAuth();

  const { user } = values;

  const isAuthenticated = user ? true : false;

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return children;
}


