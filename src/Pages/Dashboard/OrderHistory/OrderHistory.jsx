import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useOrders from "../../../components/hooks/useOrders";
import useAxiosPublic from "../../../components/hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import Pagination from "../../../components/Pagination/Pagination";


const OrderHistory = () => {
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const [userOrders, loading, , currentPage, setCurrentPage, totalPage, setTotalPage] = useOrders()
    console.log(userOrders)
    const [ordersByOrderId, setOrdersByOrderId] = useState([])
    const [singleOrderByOrderId, setSingleOrderByOrderId] = useState([])

    useEffect(() => {
        if (loading) {
            return
        }
        const orderMap = userOrders.data.reduce((acc, order) => {
            if (!acc[order.order.id]) {
                acc[order.order.id] = []
            }
            acc[order.order.id].push(order)
            return acc
        }, {})
        const multiOrderUsingOneOrder_id = userOrders.data.filter(order => orderMap[order.order.id].length > 1)
        const singleOrderUsingSingleOrder_id = userOrders.data.filter(order => orderMap[order.order.id].length === 1)
        setOrdersByOrderId(multiOrderUsingOneOrder_id)
        setSingleOrderByOrderId(singleOrderUsingSingleOrder_id)
    }, [userOrders.data, loading])
    if (loading) {
        return "Loading"
    }

    // console.log(singleOrderByOrderId)
    const handlePaymentForAllProducts = () => {
        const combineOfAllOrdersId = [];

    }
    const paymentHandler = async (order) => {
        localStorage.setItem('order_id', order.order.id)
        try {
            const response = await axiosPublic.post('/initiate/', {
                amount: order.price,
                customer_name: "Faisal Osman",
                customer_email: "faisalosman798@gmail.com",
                customer_phone: '01790203616',
                customer_address: 'Baridhara',
                customer_postcode: '1207'
            });

            window.location.href = response.data.GatewayPageURL;
        } catch (error) {
            console.error('Payment initiation failed:', error);
        }
    }
    const handlePageChange = (page) => {
        window.scrollTo(0, 0);
        setCurrentPage(page)
    }
    return (
        <div className="flex relative flex-col justify-center">
            <h3 className="text-center mb-10 font-bold text-3xl">Order History</h3>
            {/* <div className="absolute top-1 right-6">
                <button onClick={handlePaymentForAllProducts} className="relative inline-flex items-center justify-start px-5 py-2 overflow-hidden font-medium transition-all bg-black rounded hover:bg-black group">
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-red-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white text-sm">Buy All Products</span>
                </button>
            </div> */}

            <div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-16 py-3">
                                    <span className="sr-only">Image</span>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Qty
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Pay
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* {
                                ordersByOrderId.map((order, index, orders) => <div key={order.id}>
                                       {
                                        orders.d
                                       }
                                </div>)
                            } */}
                            {/* Modification */}


                            {Object.entries(
                                ordersByOrderId.reduce((acc, order) => {
                                    const orderId = order.order.id;
                                    if (!acc[orderId]) {
                                        acc[orderId] = [];
                                    }
                                    acc[orderId].push(order);
                                    return acc;
                                }, {})
                            ).map(([orderId, orders]) => (
                                <tr key={orderId} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="p-4">
                                        {orders.map(order => (
                                            <div key={order.id}>
                                                <img src={order.product.image} className="w-16 md:w-32 max-w-full max-h-full" alt={order.product.title} />
                                            </div>
                                        ))}
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {orders.map(order => (
                                            <p className="py-10" key={order.id}>{order.product.title}</p>
                                        ))}
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {orders.map(order => (
                                            <p className="py-10" key={order.id}>{order.quantity}</p>
                                        ))}
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {orders.map(order => (
                                            <p className="py-10" key={order.id}>${order.price}</p>
                                        ))}
                                    </td>
                                    <td className="px-6 py-4">
                                        {orders.map(order => (
                                            <p key={order.id} className="font-medium text-red-600 dark:text-red-500 hover:underline py-10">Remove</p>
                                        ))}
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {orders.map(order => (
                                            <div key={order.id}>
                                                {order?.order?.order_status ? (
                                                    <div className="py-10">
                                                        <div className="flex gap-x-1 items-center">
                                                            <FaCheck className="text-green-700" />
                                                            Delivered
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="py-10">
                                                        <div className="flex gap-x-1 items-center">
                                                            <span className="loading loading-spinner text-red-500 loading-sm"></span>
                                                            Pending
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900">
                                        <div>
                                            {!orders[0].order.order_status ? (
                                                <div className="py-20">
                                                    <button onClick={() => paymentHandler(orders[0])} className="relative inline-flex items-center justify-start px-5 py-2 overflow-hidden font-medium transition-all bg-black rounded hover:bg-black group">
                                                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-red-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                                        <span className="relative text-sm w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">Payment</span>
                                                    </button>
                                                </div>
                                            ) : (
                                                <button disabled className="relative inline-flex items-center justify-start px-5 py-2 overflow-hidden font-medium transition-all bg-slate-300 rounded hover:bg-slate-300 group">
                                                    <span className="relative text-sm w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">Done</span>
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {/* Single order with single order id */}

                            {
                                singleOrderByOrderId.map((order, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="p-4">

                                        <div key={order.id}>
                                            <img src={order.product.image} className="w-16 md:w-32 max-w-full max-h-full" alt={order.product.title} />
                                        </div>

                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">

                                        <p className="py-10" >{order.product.title}</p>

                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">

                                        <p className="py-10">{order.quantity}</p>

                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">

                                        <p className="py-10">${order.price}</p>

                                    </td>
                                    <td className="px-6 py-4">

                                        <p className="font-medium text-red-600 dark:text-red-500 hover:underline py-10">Remove</p>

                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">

                                        <div key={order.id}>
                                            {order?.order?.order_status ? (
                                                <div>
                                                    <div className="flex gap-x-1 items-center">
                                                        <FaCheck className="text-green-700" />
                                                        Delivered
                                                    </div>
                                                </div>
                                            ) : (
                                                <div>
                                                    <div className="flex gap-x-1 items-center">
                                                        <span className="loading loading-spinner text-red-500 loading-sm"></span>
                                                        Pending
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900">
                                        <div>
                                            {!order.order.order_status ? (
                                                <div>
                                                    <button onClick={() => paymentHandler(order)} className="relative inline-flex items-center justify-start px-5 py-2 overflow-hidden font-medium transition-all bg-black rounded hover:bg-black group">
                                                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-red-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                                        <span className="relative text-sm w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">Payment</span>
                                                    </button>
                                                </div>
                                            ) : (
                                                <button disabled className="relative inline-flex items-center justify-start px-5 py-2 overflow-hidden font-medium transition-all bg-slate-300 rounded hover:bg-slate-300 group">
                                                    <span className="relative text-sm w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">Done</span>
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>)
                            }






                        </tbody>
                    </table>

                </div>
                <div>
                    <Pagination
                        currentPage={currentPage}
                        totalPage={totalPage}
                        handlePageChange={handlePageChange}
                    ></Pagination>
                </div>
            </div>
        </div >
    );
};

export default OrderHistory;