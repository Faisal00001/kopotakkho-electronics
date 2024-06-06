import {
    createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import Basket from "../Pages/Basket/Basket";
import Blogs from "../Pages/Blogs/Blogs";
import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";
import Checkout from "../Pages/Checkout/Checkout";
import OrderHistory from "../Pages/Dashboard/OrderHistory/OrderHistory";
import PersonalDetails from "../Pages/Dashboard/PersonalDetails/PersonalDetails";
import YourAccount from "../Pages/Dashboard/YourAccount/YourAccount";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PaymentSuccessful from "../Pages/PaymentSuccessful/PaymentSuccessful";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categories/:id',
                element: <CategoryDetails></CategoryDetails>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/productDetails/:id',
                element: <ProductDetails></ProductDetails>
            },
            {
                path: '/basket',
                element: <Basket></Basket>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/checkout',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path: `/payment_status`,
                element: <PrivateRoute><PaymentSuccessful></PaymentSuccessful></PrivateRoute>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'yourAccount',
                element: <YourAccount></YourAccount>
            },
            {
                path: 'orderHistory',
                element: <OrderHistory></OrderHistory>
            },
            {
                path: 'personalDetails',
                element: <PersonalDetails></PersonalDetails>
            }
        ]
    }
]);


export default router;