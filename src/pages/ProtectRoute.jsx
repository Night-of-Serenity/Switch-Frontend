import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function ProtectedRoute({ children }) {
    const values = useAuth();

    const { user } = values;

    const isAuthenticated = Object.keys(user).length > 0 ? true : false;

    if (!isAuthenticated) {
        return <Navigate to="/guest" />;
    }
    return children;
}
