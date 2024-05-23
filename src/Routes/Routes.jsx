import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Basket from "../Pages/Basket/Basket";
import Blogs from "../Pages/Blogs/Blogs";
import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
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
            }
        ]
    },
]);


export default router;