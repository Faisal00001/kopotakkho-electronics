import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useOrders from "../../../components/hooks/useOrders";


const OrderHistory = () => {
    const navigate = useNavigate()
    const [userOrders, loading] = useOrders()
    if (loading) {
        return "Loading"
    }
    const paymentHandler = (order) => {
        console.log(order)
        navigate('/checkout')
    }
    return (
        <div className="flex flex-col justify-center">
            <h3 className="text-center mb-10 font-bold text-3xl">Order History</h3>

            <div className="pl-10">
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
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userOrders?.data.map(order => <tr key={order.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="p-4">
                                        <img src={order.product.image} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {order.product.title}
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {order.quantity}
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        ${order.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {order?.order?.order_status ? <div>
                                            <div className="flex gap-x-1 items-center">
                                                <FaCheck className=" text-green-700" />
                                                Delivered
                                            </div>
                                        </div> : <div onClick={() => paymentHandler(order)} className="cursor-pointer hover:underline">
                                            <div className="flex gap-x-1 items-center ">
                                                <span className="loading loading-spinner text-yellow-400 loading-md"></span>
                                                Payment Pending
                                            </div>
                                        </div>}
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default OrderHistory;