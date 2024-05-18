import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
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
            <Footer></Footer>
            <Toaster position="top-right"
                reverseOrder={false} />
        </div>
    );
};

export default Main;