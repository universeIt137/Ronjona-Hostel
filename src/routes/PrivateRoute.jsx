import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const user = localStorage.getItem("user");
    console.log(user);
    const location = useLocation();
    const navigate = useNavigate();

    if (!user) {
        return <Navigate to="/admin-login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;