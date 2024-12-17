import { FaCirclePlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import useGetSupplier from "../../../components/hooks/useGetSupplier";
import Pagination from "../../../components/Pagination/Pagination";
import { useState } from "react";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import toast from "react-hot-toast";


const SupplierManager = () => {
    const [suppliers, loading, refetch, currentPage, setCurrentPage, totalPage, setTotalPage] = useGetSupplier()
    const axiosSecure = useAxiosSecure()
    const [filteredStocks, setFilteredStocks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate()
    if (loading) {
        return "Loading"
    }
    const handlePageChange = (page) => {
        window.scrollTo(0, 0);
        setCurrentPage(page)
    }
    const handleAddNewSupplier = () => {
        navigate('/sellerDashboard/addSupplier')
    }
    const handleSearchEnterPress = async (value) => {
        setSearchTerm(value)

        if (searchTerm.length >= 2) {
            navigate(`/sellerDashboard/searchResultSupplier?q=${searchTerm}`)

        }
    }
    const handleSearch = async (value) => {
        setSearchTerm(value)
        if (searchTerm.length >= 2) {
            try {
                const response = await axiosSecure.get(`/suppliers/search/?q=${searchTerm}`)
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
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearchEnterPress(e.target.value);
        }
    };
    console.log(suppliers.results)
    console.log('Filter search ', filteredStocks)

    return (
        <div>
            <div className="flex justify-end ">
                <button onClick={handleAddNewSupplier} className="btn bg-blue-700 hover:bg-blue-800 text-white  flex flex-row items-center"> <FaCirclePlus className="text-2xl mr-2"></FaCirclePlus> Add a new supplier</button>
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
                        <input value={searchTerm} onKeyDown={(e) => handleKeyDown(e)} onChange={(e) => handleSearch(e.target.value)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none" placeholder="Search stock by name..." />

                    </div>
                    <div>
                        {/* Search results */}
                        {filteredStocks.length > 0 && searchTerm !== '' && (
                            <div className="absolute left-0 top-full mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                <ul>
                                    {filteredStocks.map((result) => (
                                        <li key={result.id} className="p-2 hover:bg-gray-100">
                                            {result.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>


            </div>



            <div className="mt-20">


                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Address
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Phone
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Gstin
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                suppliers?.results.map((supplier, index) => {
                                    return <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {supplier?.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {supplier?.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            {supplier?.address}
                                        </td>
                                        <td className="px-6 py-4">
                                            {supplier?.phone}
                                        </td>
                                        <td className="px-6 py-4">
                                            {supplier?.gstin}
                                        </td>
                                    </tr>
                                })
                            }



                        </tbody>
                    </table>
                </div>


            </div>
            <div className="mt-10">
                <Pagination
                    currentPage={currentPage}
                    totalPage={totalPage}
                    handlePageChange={handlePageChange}
                ></Pagination>
            </div>
        </div>
    );
};

export default SupplierManager;