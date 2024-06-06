import { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Dashboard = () => {
    const location = useLocation()
    const [pathName, setPathName] = useState('')
    useEffect(() => {
        if (location.pathname === '/dashboard/orderHistory') {
            setPathName('Order History')
        }
    }, [location.pathname])

    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto my-5">
                <div className="flex gap-5">
                    <Link to={'/'} className="flex gap-1 items-center">
                        <h3 className="text-sm cursor-pointer text-blue-500 hover:underline">Home</h3>
                        <MdOutlineKeyboardArrowRight className="text-2xl" />
                    </Link>
                    {/* <div className="flex gap-1 items-center">
                        <h3 className="text-sm text-blue-500 hover:underline cursor-pointer">Account</h3>
                        <MdOutlineKeyboardArrowRight className="text-2xl" />
                    </div> */}
                    <div className="flex gap-1 items-center">
                        <h3 className="text-sm">{pathName}</h3>

                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row">
                    <div className="drawer w-[25%] lg:drawer-open">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-center justify-center">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu  w-80 min-h-full bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                <NavLink to="/dashboard/orderHistory" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-blue-900 font-semibold py-3 px-2 rounded-sm text-white" : "py-3 px-2"
                                }>

                                    <div className="flex gap-2 items-center">
                                        <IoIosTimer className="text-2xl"></IoIosTimer>
                                        <h3>Order History</h3>
                                    </div></NavLink>
                                <NavLink to="/dashboard/personalDetails" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-blue-900 text-white py-3 px-2 rounded-sm font-semibold" : "py-3 px-2 text-blue-800"
                                }>

                                    <div className="flex gap-2 items-center">
                                        <FaRegUserCircle className="text-2xl"></FaRegUserCircle>
                                        <h3>Personal Details</h3>
                                    </div></NavLink>

                            </ul>

                        </div>
                    </div>
                    <div className="w-[75%]">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;