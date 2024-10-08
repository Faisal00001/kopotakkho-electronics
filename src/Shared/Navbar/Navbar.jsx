import { useContext, useEffect, useState } from "react";
import { FaChevronDown, FaRegWindowRestore, FaShoppingCart } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { MdAccountCircle, MdMenu } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../components/hooks/useAxiosPublic";


const Navbar = () => {
    const storedUser = localStorage.getItem('user');
    const [firstName, setFirstName] = useState('')
    const { cartItems } = useContext(AuthContext)
    const [user, setUser] = useState({})
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    useEffect(() => {
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setUser(JSON.parse(storedUser))
            setFirstName(user.user_name)
        }
    }, [storedUser])
    const handleLogout = () => {
        axiosPublic.post('/customer-logout/')
            .then(res => {
                console.log(res)
                if (res.status === 200) {

                    localStorage.clear()
                    navigate('/')
                }
                else {
                    console.error('Logout failed');
                }
            })
            .catch(error => console.log(error))
    }
    console.log(user)
    return (
        <div className="sticky top-0 z-50">
            <div className="navbar bg-[#0046be] pl-5 ">
                <div className="navbar-start">
                    <div className="flex flex-row lg:gap-5 items-center">
                        <Link to={'/'} className="font-semibold lg:font-bold text-white lg:text-2xl text-xl">Kopotakkho Electronics</Link>
                        <div className="relative">
                            <input className="focus:outline-none w-auto lg:w-[300px] py-2 pl-3 hidden lg:block rounded-sm text-sm" type="text" placeholder="Search Here.." />
                            <IoSearchSharp className="absolute hidden lg:block cursor-pointer text-blue-700 text-xl top-[25%] right-3" />

                        </div>
                    </div>

                </div>

                <div className="navbar-end pr-5">
                    <div>
                        <div className="mb-5 lg:mt-2 hidden lg:block ">
                            <ul className="flex gap-5 text-xs text-white">
                                <li className="cursor-pointer hover:underline">Order Status</li>
                                <Link to={'/blogs'} className="cursor-pointer hover:underline">Blog</Link>
                                <li className="cursor-pointer hover:underline">Business</li>
                                <li className="cursor-pointer hover:underline">Francais</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="flex mt-2 lg:mt-0 flex-wrap justify-center content-center gap-5">
                                <li className="flex gap-2 cursor-pointer group items-center">
                                    <div className=" text-white group-hover:text-yellow-400"><FaRegWindowRestore className="text-xl lg:text-2xl" /></div>
                                    <div className="text-white group-hover:text-yellow-400 text-xs">Stores</div>
                                </li>

                                {
                                    storedUser ?
                                        <div>
                                            <div className="dropdown dropdown-end relative">
                                                <div tabIndex={0} role="button" className=" m-1">
                                                    <div className="flex gap-2 relative text-white hover:text-yellow-400 cursor-pointer items-center">
                                                        <div>
                                                            <MdAccountCircle className="text-xl lg:text-3xl" />
                                                        </div>
                                                        <div className="text-xs">
                                                            <div>
                                                                {firstName}
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>

                                                <ul tabIndex={0} className="dropdown-content z-[1] menu  w-48 top-4">
                                                    <div className="py-3 shadow-lg">
                                                        <div className="w-4 h-4 right-3 absolute mt-1 bg-white rotate-45"></div>
                                                    </div>
                                                    <div className="bg-white shadow-2xl">
                                                        {
                                                            user.isSeller && <Link to={'/sellerDashboard'} className="flex gap-2 pl-5 items-center py-5 cursor-pointer">
                                                                <div>
                                                                    <VscAccount className="text-slate-700 text-xl" />
                                                                </div>
                                                                <div>
                                                                    <h3 className="text-black  ">Your Account</h3>
                                                                </div>
                                                            </Link>
                                                        }
                                                        {
                                                            user.isCustomer && <Link to={'/dashboard/orderHistory'} className="flex gap-2 pl-5 items-center py-5 cursor-pointer">
                                                                <div>
                                                                    <VscAccount className="text-slate-700 text-xl" />
                                                                </div>
                                                                <div>
                                                                    <h3 className="text-black  ">Your Account</h3>
                                                                </div>
                                                            </Link>
                                                        }
                                                        <hr />
                                                        <div onClick={handleLogout} className="flex gap-2 pl-5 items-center py-5 cursor-pointer">
                                                            <div>
                                                                <IoIosLogOut className="text-slate-700 text-xl" />
                                                            </div>
                                                            <div>
                                                                <h3 className="text-black  ">Sign Out</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </ul>
                                            </div>

                                        </div> : <div className="flex gap-2 relative text-white hover:text-yellow-400 cursor-pointer items-center">
                                            <div>
                                                <MdAccountCircle className="text-xl lg:text-3xl" />
                                            </div>
                                            {/* <div className="text-xs">
                                                <div>
                                                    Account
                                                </div>


                                            </div> */}
                                            <div className="dropdown dropdown-end">
                                                <div tabIndex={0} role="button" className="m-1 text-sm">Account</div>
                                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded z-[1] w-48 p-2 shadow-xl">
                                                    <Link to={'/login'} className="text-black py-2 px-2 hover:bg-slate-800 hover:text-white rounded">Login as customer</Link>
                                                    <Link to={'/sellerLogin'} className="text-black py-2 px-2 hover:bg-slate-800 hover:text-white rounded">Login as seller</Link>
                                                </ul>
                                            </div>
                                        </div>

                                }



                                <Link to={'/basket'} className="flex relative gap-3 items-center text-white hover:text-yellow-400 cursor-pointer">
                                    <div>
                                        <FaShoppingCart className="text-xl lg:text-2xl" />
                                    </div>
                                    <div >
                                        <h3 className="text-xs">
                                            Cart

                                        </h3>

                                    </div>
                                    <div className="absolute left-3 -top-1">
                                        <div className="w-5 h-5 bg-yellow-400 rounded-full">
                                            <span className="text-xs absolute left-[30%] top-[10%] font-medium text-black">{cartItems.length}</span>
                                        </div>
                                    </div>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#003099] flex flex-row items-center pl-5">
                <div className="dropdown z-20">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <MdMenu className="text-white text-3xl" />
                    </div>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="ml-5 w-[70%] lg:w-auto">
                    <div className="relative ">
                        <input className="focus:outline-none w-full lg:w-[300px] py-2 pl-3 block lg:hidden rounded-sm text-sm" type="text" placeholder="Search Here.." />
                        <IoSearchSharp className="absolute block lg:hidden cursor-pointer text-blue-700 text-xl top-[25%] right-3" />

                    </div>
                </div>
                <div className="hidden lg:block">
                    <ul className="flex gap-5  text-sm items-center text-white">
                        <div className="group">
                            <div className="flex py-3 gap-1 items-center cursor-pointer select-none">
                                <li className="">Shop</li>
                                <FaChevronDown />
                            </div>

                            {/* Drop Down Content */}
                            <div className="rounded border-gray-500 bg-gray-100 border-[1px] py-2 absolute top-[133px] w-[250px] hidden group-hover:block shadow-md">
                                <div className="text-black py-2 hover:bg-white pl-2 hover:text-blue-800 cursor-pointer">
                                    Account Settings
                                </div>
                                <div className="text-black py-2 hover:bg-white pl-2 cursor-pointer hover:text-blue-800">
                                    Account Settings
                                </div>
                                <div className="text-black py-2 hover:bg-white pl-2 cursor-pointer hover:text-blue-800">
                                    Account Settings
                                </div>
                                <div className="text-black py-2 hover:bg-white pl-2 cursor-pointer hover:text-blue-800">
                                    Account Settings
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-1 items-center cursor-pointer">
                            <li className="">Mothers Day Gifts</li>
                            <FaChevronDown />
                            {/* Drop Down Content */}
                        </div>
                        <div className="flex gap-1 items-center cursor-pointer">
                            <li className="">Deals</li>
                            <FaChevronDown />
                            {/* Drop Down Content */}
                        </div>
                        <div className="flex gap-1 items-center cursor-pointer">
                            <li className="">Outlet</li>
                            <FaChevronDown />
                            {/* Drop Down Content */}
                        </div>
                        <div className="flex gap-1 items-center cursor-pointer">
                            <li className="">Services</li>
                            <FaChevronDown />
                            {/* Drop Down Content */}
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;