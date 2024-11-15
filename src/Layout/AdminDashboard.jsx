import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

import { MdCategory, MdDoNotDisturbOnTotalSilence, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Navbar from "../Shared/Navbar/Navbar";
import { GoListUnordered } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";


const AdminDashboard = () => {
    const location = useLocation()
    const [pathName, setPathName] = useState('')
    useEffect(() => {
        if (location.pathname === '/dashboard/orderHistory') {
            setPathName('Order History')
        }
        if (location.pathname === '/dashboard/myWishlist') {
            setPathName('My Wishlist')
        }
        if (location.pathname === '/dashboard/personalDetails') {
            setPathName('Personal Details')
        }
        if (location.pathname === '/dashboard/profile') {
            setPathName('Profile')
        }
    }, [location.pathname])
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto my-5">
                <div className="flex gap-5">
                    <Link
                        to={'/'} className="flex gap-1 items-center">
                        <h3 className="text-sm cursor-pointer text-blue-500 hover:underline">Home</h3>
                        <MdOutlineKeyboardArrowRight className="text-2xl" />
                    </Link>
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
                                <NavLink to="/adminDashboard/adminAddCategory" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-blue-900 font-semibold py-3 px-2 rounded-sm text-white" : "py-3 px-2 text-blue-800"
                                }>

                                    <div className="flex gap-2 items-center">
                                        <MdCategory className="text-2xl" />

                                        <h3>Add Category</h3>
                                    </div></NavLink>
                                {/* <NavLink to="/adminDashboard/customerTotalOrders" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-blue-900 font-semibold py-3 px-2 rounded-sm text-white" : "py-3 px-2 text-blue-800"
                                }>

                                    <div className="flex gap-2 items-center">
                                        <GoListUnordered className="text-2xl" />

                                        <h3>Customer total orders</h3>
                                    </div></NavLink> */}
                                <NavLink to="/adminDashboard/totalVendors" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-blue-900 font-semibold py-3 px-2 rounded-sm text-white" : "py-3 px-2 text-blue-800"
                                }>

                                    <div className="flex gap-2 items-center">
                                        <MdDoNotDisturbOnTotalSilence className="text-2xl" />

                                        <h3>Total vendors</h3>
                                    </div></NavLink>
                                <NavLink to="/adminDashboard/totalCustomers" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-blue-900 font-semibold py-3 px-2 rounded-sm text-white" : "py-3 px-2 text-blue-800"
                                }>

                                    <div className="flex gap-2 items-center">
                                        <FaUserFriends className="text-2xl" />

                                        <h3>Total customers</h3>
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
            <Toaster position="top-center"
                reverseOrder={false} />
        </div>
    );
};

export default AdminDashboard;