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
import PaymentFail from "../Pages/PaymentFail/PaymentFail";
import MyWishlist from "../Pages/Dashboard/MyWishlist/MyWishlist";
import Invoice from "../components/Invoice/Invoice";
import Profile from "../Pages/Dashboard/Profile/Profile";
import RegistrationSeller from "../Pages/RegistrationSeller/RegistrationSeller";
import SellerLogin from "../Pages/SellerLogin/SellerLogin";
import SellerDashboard from "../Layout/SellerDashboard";
import AddProduct from "../Pages/SellerDashboard/AddProduct/AddProduct";
import ChangePassword from "../Pages/SellerDashboard/ChangePassword/ChangePassword";
import SellerWishList from "../Pages/SellerDashboard/SellerWishList/SellerWishList";
import SellerOrders from "../Pages/SellerDashboard/SellerOrders/SellerOrders";
import ProductQuestion from "../Pages/ProductQuestion/ProductQuestion";
import UserChangePassword from "../Pages/Dashboard/UserChangePassword/UserChangePassword";

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
                path: '/sellerLogin',
                element: <SellerLogin></SellerLogin>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/registrationSeller',
                element: <RegistrationSeller></RegistrationSeller>
            },
            {
                path: '/productDetails/:id',
                element: <ProductDetails></ProductDetails>
            },
            {
                path: '/question',
                element: <ProductQuestion></ProductQuestion>
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
            },
            {
                path: '/paymentFail',
                element: <PrivateRoute><PaymentFail></PaymentFail></PrivateRoute>
            },
            {
                path: '/invoice',
                element: <Invoice></Invoice>
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
            },
            {
                path: 'myWishlist',
                element: <MyWishlist></MyWishlist>
            },
            {
                path: 'profile',
                element: <Profile></Profile>
            },
            {
                path: 'userChangePassword',
                element: <UserChangePassword></UserChangePassword>
            }
        ]
    },
    {
        path: 'sellerDashboard',
        element: <PrivateRoute> <SellerDashboard></SellerDashboard> </PrivateRoute>,
        children: [
            {
                path: 'addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: 'changePassword',
                element: <ChangePassword></ChangePassword>
            },
            {
                path: 'wishList',
                element: <SellerWishList></SellerWishList>
            },
            {
                path: 'orders',
                element: <SellerOrders></SellerOrders>
            }
        ]
    }
]);


export default router;