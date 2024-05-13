import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Main = () => {
    const location = useLocation()
    console.log(location.pathname)
    return (
        <div>
            {
                location.pathname === '/login' || location.pathname === '/registration' ? '' : <Navbar></Navbar>
            }

            <Outlet></Outlet>
            <Toaster />
        </div>
    );
};

export default Main;