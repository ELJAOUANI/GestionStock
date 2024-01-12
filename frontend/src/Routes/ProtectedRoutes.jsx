import { useAuth } from "../hooks/useAuth"; // Adjust the import path accordingly
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({ children }) => {
    const { token } = useAuth();
   

    if (token) {
        return children;
    }

    return <Navigate to="/login" />;
};
