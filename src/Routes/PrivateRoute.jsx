import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    // const customerLoginRoute = user?.isCustomer === true ? true : false
    // const sellerLoginRoute = user?.isSeller === true ? true : false
    // let path = ''
    const isLogin = user?.user_name ? true : false
    const location = useLocation()
    if (isLogin) {
        return children
    }
    // if (customerLoginRoute) {
    //     path = '/login'
    // }
    // if (sellerLoginRoute) {
    //     path = '/sellerLogin'
    // }
    // return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    return <Navigate to={`/`} state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;