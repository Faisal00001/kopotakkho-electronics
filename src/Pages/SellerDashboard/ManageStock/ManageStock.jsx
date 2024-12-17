
import { FaCirclePlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import useGetStocks from "../../../components/hooks/useGetStocks";
import Pagination from "../../../components/Pagination/Pagination";
import { useState } from "react";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
const ManageStock = () => {
    const axiosSecure = useAxiosSecure()
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedStock, setEditedStock] = useState({ name: '', quantity: '' });
    const [stocks, loading, refetch, currentPage, setCurrentPage, totalPage, setTotalPage] = useGetStocks()
    const [filteredStocks, setFilteredStocks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate()
    if (loading) {
        return "Loading"
    }
    const handleAddStock = () => {
        navigate('/sellerDashboard/addStock')
    }
    const handlePageChange = (page) => {
        window.scrollTo(0, 0);
        setCurrentPage(page)
    }
    const handleEditClick = (index, stock) => {
        setEditingIndex(index);
        setEditedStock(stock);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedStock((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = async () => {
        console.log(editedStock)
        const { id, name, quantity, vendor } = editedStock

        try {
            const response = await axiosSecure.put(`/stocks/${id}/`, {
                name: name,
                quantity: quantity,
                vendor: vendor,
            })
            // Handle response
            if (response.status >= 200 && response.status < 300) {
                refetch()
                toast.success('Stock saved successfully');

            }
        } catch (error) {
            if (error.response && error.response.data) {
                const serverMessage = error.response.data.name?.[0] || 'An error occurred';
                toast.error(serverMessage);
            } else {
                toast.error('An error occurred. Please try again.');
            }

            console.error('Error saving stock:', error);
        }
        // Save logic goes here
        setEditingIndex(null);
    };
    const handleStockDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                try {
                    const response = await axiosSecure.delete(`/stocks/${id}/`)
                    // Handle response
                    if (response.status >= 200 && response.status < 300) {

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        // refetch()
                        if (currentPage > 1) {
                            setCurrentPage(currentPage - 1)
                        }
                        else {
                            refetch()
                        }

                    }
                } catch (error) {
                    if (error.response && error.response.data) {
                        const serverMessage = error.response.data.name?.[0] || 'An error occurred';
                        toast.error(serverMessage);
                    } else {
                        toast.error('An error occurred. Please try again.');
                    }

                    console.error('Error deleting stock:', error);
                }
            }
        });

    }
    const handleSearch = async (searchQuery) => {
        setSearchTerm(searchQuery)
        if (searchTerm.length >= 2) {
            try {
                const response = await axiosSecure.get(`/stocks/search/?q=${searchTerm}`)
                console.log('Search response ', response)
                if (response.data) {
                    setFilteredStocks(response.data.data)
                }
            } catch (error) {
                if (error.response && error.response.data) {
                    const serverMessage = error.response.data.name?.[0] || 'An error occurred';
                    toast.error(serverMessage);
                } else {
                    toast.error('An error occurred. Please try again.');
                }

                console.error('Error searching stocks:', error);
            }

        }
    }
    const handleSearchEnterPress = (value) => {
        setSearchTerm(value)
        if (searchTerm.length >= 2) {
            navigate(`/sellerDashboard/searchResultsManageStocks?q=${searchTerm}`)

        }
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearchEnterPress(e.target.value);
        }
    }

    return (
        <div>
            <div className="flex justify-end ">
                <button onClick={handleAddStock} className="btn bg-blue-700 hover:bg-blue-800 text-white  flex flex-row items-center"> <FaCirclePlus className="text-2xl mr-2"></FaCirclePlus> Add new Stock</button>
            </div>



            <div className="mt-10">

                <div className="max-w-md mx-auto relative">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input onKeyDown={handleKeyDown} value={searchTerm} onChange={(e) => handleSearch(e.target.value)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none" placeholder="Search stock by name..." />

                    </div>
                    <div>
                        {/* Search results */}
                        {filteredStocks.length > 0 && searchTerm !== '' && (
                            <div className="absolute left-0 top-full mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                <ul>
                                    {filteredStocks.map((result) => (
                                        <li key={result.id} className="p-2 hover:bg-gray-100">
                                            {result.name} - Quantity {result.quantity}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>


            </div>
            <div className="relative overflow-x-auto mt-20">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">Stock name</th>
                            <th scope="col" className="px-6 py-3">Quantity</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stocks?.results.map((stock, index) => (
                            <tr key={index} className="bg-white border-b">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {editingIndex === index ? (

                                        <input value={editedStock.name}
                                            onChange={handleInputChange} type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    ) : (
                                        stock.name
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    {editingIndex === index ? (

                                        <input type="number"
                                            name="quantity"
                                            value={editedStock.quantity}
                                            onChange={handleInputChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    ) : (
                                        stock.quantity
                                    )}
                                </td>
                                <td className="px-6 py-4 flex gap-2">
                                    {editingIndex === index ? (
                                        <button
                                            onClick={handleSave}
                                            className="btn bg-green-600 hover:bg-green-700 text-white">
                                            Save
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleEditClick(index, stock)}
                                            className="btn bg-blue-600 hover:bg-blue-700 text-white">
                                            Edit
                                        </button>
                                    )}
                                    <button onClick={() => { handleStockDelete(stock.id) }} className="btn bg-red-500 hover:bg-red-600 text-white">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
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
    );
};

export default ManageStock;