import { useState } from "react";
import useOrders from "../../../components/hooks/useOrders";
import useSellerOrders from "../../../components/hooks/useSellerOrders";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";

const SellerOrders = () => {
    const axiosSecure = useAxiosSecure()
    const [sellerOrders, loading] = useSellerOrders()
    const [selectedOrderStatus, setSelectedOrderStatus] = useState('');
    const [selectedOrderId, setSelectedOrderId] = useState('')
    if (loading) {
        return "Loading"
    }
    const changeOrderStatus = (event, order_id) => {
        // console.log(order_id)
        const status = event.target.value
        console.log(order_id)
        setSelectedOrderStatus(event.target.value)

    }
    console.log(selectedOrderStatus)
    return (
        <div>



            <div className="relative ml-10 overflow-x-auto shadow-md sm:rounded-lg">
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
                                Customer
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellerOrders.data.map((order, index) => {
                                return (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">


                                        <td className="p-4">
                                            <img src={order?.product.image} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {
                                                order?.product.title
                                            }
                                        </td>

                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            <div>

                                                <span className="mr-2">
                                                    {
                                                        order?.customer?.first_name
                                                    }
                                                </span>
                                                <span>
                                                    {
                                                        order?.customer?.last_name
                                                    }
                                                </span>
                                            </div>
                                            <div>
                                                {
                                                    order.customer.address.address
                                                }
                                            </div>

                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {
                                                order.price
                                            }
                                        </td>
                                        <td className="px-6 py-4">
                                            {
                                                order.order_status === 'Pending' ? <div className="flex gap-2 items-center">
                                                    <div>
                                                        <span className="loading loading-spinner loading-md text-accent"></span>
                                                    </div>
                                                    <div className="font-semibold text-gray-900">
                                                        Pending
                                                    </div>
                                                </div> : "Deliver"
                                            }
                                        </td>
                                        <td className="px-6 py-4">
                                            <select value={selectedOrderStatus} onChange={(e) => changeOrderStatus(e, order.order)} className="select select-accent w-full max-w-xs">
                                                <option value={''} disabled>Change Status</option>
                                                <option value="Confirm">Confirm</option>
                                                <option value="Delivered">Delivered</option>
                                                <option value="Cancelled">Cancelled</option>
                                            </select>
                                        </td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default SellerOrders;