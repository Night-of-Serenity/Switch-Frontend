import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function RedirectIfAuthenticate({ children }) {
    const values = useAuth();

    const { user } = values;
    // console.log(Object.keys(user));

    const isAuthenticated = Object.keys(user).length > 0 ? true : false;
    // Object.keys(user).length > 0
    if (isAuthenticated) {
        return <Navigate to="/" />;
    }
    return children;
}
