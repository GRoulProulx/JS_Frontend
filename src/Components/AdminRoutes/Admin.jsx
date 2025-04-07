import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

function AdminRoute() {
    const { token, user } = useContext(AuthContext);
    
    if (!token || user.role > 0) {
        return <Navigate to="/" />;
    } else {
        return <Outlet />;
    }
}

export default AdminRoute;
