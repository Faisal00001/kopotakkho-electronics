import { useState } from "react";
import useVendorCustomerList from "../../../components/hooks/useVendorCustomerList";
import { useNavigate } from "react-router-dom";


const SellerCustomers = () => {
    const [customersList, loading] = useVendorCustomerList()
    const navigate = useNavigate()
    // const [uniqueCustomer, setUniqueCustomer] = useState([])
    if (loading) {
        return "Loading"
    }
    // const uniqueCustomer = customersList?.data.filter((item, index, self) => {
    //     return index === self.findIndex((t) => t.order.customer.phone === item.order.customer.phone)
    // })
    const handleOrders = (item) => {
        console.log(item.order)
        navigate(`/sellerDashboard/sellerCustomerOrders/${item.order.customer.customer_id}`)
    }
    console.log('Tra', customersList.data)
    // console.log('Uniq', uniqueCustomer)
    return (
        <div>

            <div className="relative ml-10 overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Full name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Mobile
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customersList.data?.map((item, index) => <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <span className="mr-2"> {
                                        item?.user?.first_name
                                    }</span>
                                    <span>{item?.user?.last_name}</span>
                                </th>
                                <td className="px-6 py-4">
                                    {item?.user?.email}
                                </td>
                                <td className="px-6 py-4">
                                    {item?.phone}
                                </td>

                                <td className="px-6 py-4">
                                    <button onClick={() => handleOrders(item)} className="btn mr-3 bg-blue-400 hover:bg-blue-400">Orders</button>
                                    <button className="btn bg-red-400 hover:bg-red-400">Remove</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default SellerCustomers;