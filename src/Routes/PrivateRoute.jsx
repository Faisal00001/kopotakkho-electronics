import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    const isLogin = user?.user_name ? true : false
    const location = useLocation()
    if (isLogin) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;