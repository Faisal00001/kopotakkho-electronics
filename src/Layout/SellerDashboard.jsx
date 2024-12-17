import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { MdAssignmentAdd, MdListAlt, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { IoIosTimer } from "react-icons/io";
import { FaChevronDown, FaClipboardList, FaRegUserCircle } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import Footer from "../Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUsersLine } from "react-icons/fa6";
import { BiSolidReport } from "react-icons/bi";
import { GrDocumentUpdate } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { SiShutterstock } from "react-icons/si";


const SellerDashboard = () => {
    const location = useLocation()
    const [pathName, setPathName] = useState('')
    const [open, setOpen] = useState(false);
    const handleMouseLeave = (value) => {
        setOpen(false)
    }
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
                    <div className="drawer md:w-[25%] lg:drawer-open">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-center justify-center">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden my-5">Click to open menus</label>

                        </div>
                        <div className="drawer-side z-50 lg:z-0">
                            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu  w-80 min-h-full bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                <NavLink to="/sellerDashboard/sellerProfile" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-blue-900 font-semibold py-3 px-2 rounded-sm text-white" : "py-3 px-2 text-blue-800"
                                }>

                                    <div className="flex gap-2 items-center">
                                        <CgProfile className="text-2xl" />

                                        <h3>Profile</h3>
                                    </div></NavLink>
                                <NavLink to="/sellerDashboard/sellerProducts" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-blue-900 font-semibold py-3 px-2 rounded-sm text-white" : "py-3 px-2 text-blue-800"
                                }>

                                    <div className="flex gap-2 items-center">
                                        <MdAssignmentAdd className="text-2xl" />

                                        <h3>My Products</h3>
                                    </div></NavLink>
                                <NavLink to="/sellerDashboard/addProduct" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-blue-900 font-semibold py-3 px-2 rounded-sm text-white" : "py-3 px-2 text-blue-800"
                                }>

                                    <div className="flex gap-2 items-center">
                                        <MdAssignmentAdd className="text-2xl" />

                                        <h3>Add Product</h3>
                                    </div></NavLink>
                                <NavLink to="/sellerDashboard/changePassword" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-blue-900 font-semibold py-3 px-2 rounded-sm text-white" : "py-3 px-2 text-blue-800"
                                }>

                                    <div className="flex gap-2 items-center">
                                        <RiLockPasswordLine className="text-2xl" />

                                        <h3>Change Password</h3>
                                    </div></NavLink>


                                {/* <NavLink to="/sellerDashboard/wishList" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-blue-900 font-semibold py-3 px-2 rounded-sm text-white" : "py-3 px-2 text-blue-800"
                                }>

                                    <div className="flex gap-2 items-center">
                                        <GoChecklist className="text-2xl" />

                                        <h3>My WishList</h3>
                                    </div></NavLink> */}
                                <NavLink to="/sellerDashboard/orders" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-blue-900 font-semibold py-3 px-2 rounded-sm text-white" : "py-3 px-2 text-blue-800"
                                }>

                                    <div className="flex gap-2 items-center">
                                        <MdListAlt className="text-2xl" />

                                        <h3>Orders</h3>
                                    </div></NavLink>
                                <NavLink to="/sellerDashboard/sellerCustomers" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-blue-900 font-semibold py-3 px-2 rounded-sm text-white" : "py-3 px-2 text-blue-800"
                                }>

                                    <div className="flex gap-2 items-center">
                                        <FaUsersLine className="text-2xl" />

                                        <h3>Customers</h3>
                                    </div></NavLink>
                                <NavLink to="/sellerDashboard/sellerReport" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-blue-900 font-semibold py-3 px-2 rounded-sm text-white" : "py-3 px-2 text-blue-800"
                                }>

                                    <div className="flex gap-2 items-center">
                                        <BiSolidReport className="text-2xl" />

                                        <h3>Reports</h3>
                                    </div></NavLink>
                                <NavLink to="/sellerDashboard/addProductSpecification" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-blue-900 font-semibold py-3 px-2 rounded-sm text-white" : "py-3 px-2 text-blue-800"
                                }>

                                    <div className="flex gap-2 items-center">
                                        <BiSolidReport className="text-2xl" />

                                        <h3>Add Product Specification</h3>
                                    </div></NavLink>
                                {/* POS */}
                                <div

                                    className="relative"
                                    onMouseEnter={() => setOpen(true)}
                                    onMouseLeave={() => setOpen(false)}
                                >
                                    <div className="flex gap-1 items-center cursor-pointer select-none hover:bg-black hover:text-white px-2 text-blue-800">
                                        <SiShutterstock className="text-2xl"></SiShutterstock>
                                        <div tabIndex={0} role="button" className="py-3 m-1">
                                            POS
                                        </div>
                                        <FaChevronDown
                                            className={`mr-5 transition-transform duration-300 ${open === true ? "rotate-180" : "rotate-0"
                                                }`}
                                        />
                                    </div>

                                    {/* Dropdown */}
                                    <ul
                                        className={`absolute left-0 -mt-[0.5px] z-10 bg-white rounded-none w-52 p-2 text-black shadow border-[1px] border-gray-300 transition-all duration-300 ${open === true ? "opacity-100 visible" : "opacity-0 invisible"
                                            }`}
                                    >
                                        <li>
                                            <Link
                                                to={'/sellerDashboard/manageStock'}
                                                className="block px-4 py-2 hover:bg-gray-300"
                                                onClick={handleMouseLeave} // Close dropdown on click
                                            >
                                                Manage Stock
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to={'/sellerDashboard/supplierManager'}
                                                className="block px-4 py-2 hover:bg-gray-300"
                                                onClick={handleMouseLeave} // Close dropdown on click
                                            >
                                                Supplier Manage
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* <NavLink to="/sellerDashboard/updateProduct" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-blue-900 font-semibold py-3 px-2 rounded-sm text-white" : "py-3 px-2 text-blue-800"
                                }>

                                    <div className="flex gap-2 items-center">
                                        <GrDocumentUpdate className="text-2xl" />

                                        <h3>Update product</h3>
                                    </div></NavLink> */}


                            </ul>

                        </div>
                    </div>
                    <div className="md:w-[75%] px-5">
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

export default SellerDashboard;