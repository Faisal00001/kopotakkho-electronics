import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../components/hooks/useAxiosPublic";
import { useEffect, useState } from "react";


const SellerCustomersOrders = () => {
    const { id } = useParams()
    const customer_id = parseInt(id)
    const axiosPublic = useAxiosPublic()
    const [customerOrders, setCustomerOrders] = useState([])
    console.log(customer_id)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axiosPublic.get(`/customer/${customer_id}/order-items/?format=json`)
                const fetchedData = response.data
                setCustomerOrders(fetchedData)
            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [axiosPublic, customer_id])
    if (loading) {
        return "Loading"
    }
    console.log(customerOrders.data)
    return (
        <div>


            <div className="relative ml-10 overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Customer name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customerOrders.data.map((item, index) => <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <span className="mr-2">
                                        {
                                            item.order.customer.first_name
                                        }
                                    </span>
                                    <span>
                                        {
                                            item.order.customer.last_name
                                        }
                                    </span>
                                </th>
                                <td className="px-6 py-4">
                                    {
                                        item.product.title
                                    }
                                </td>
                                <td className="px-6 py-4">
                                    Laptop
                                </td>
                                <td className="px-6 py-4">
                                    $2999
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default SellerCustomersOrders;