import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getAccessToken } from "../utils/localstroge";
export default function ProtectedRoute({ children }) {
    const values = useAuth();

    const { user } = values;

    const isAuthenticated = Object.keys(user).length > 0 ? true : false;
    const token = getAccessToken();
    // Object.keys(user).length > 0
    if (!isAuthenticated && !token) {
        return <Navigate to="/welcome" />;
    }
    return children;
}
