import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const isLogin = localStorage.getItem('user')
    const location = useLocation()
    if (isLogin) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;