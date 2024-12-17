import { useEffect, useState } from "react";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";


const SearchResultsManageStocks = () => {
    const axiosSecure = useAxiosSecure()
    const [loading, setLoading] = useState(true);
    const query = new URLSearchParams(location.search).get('q');
    const [results, setResults] = useState([]);
    useEffect(() => {
        setLoading(true);
        const fetchSearchResults = async () => {
            try {
                const response = await axiosSecure.get(`/stocks/search/?q=${query}`);
                const data = await response.data;
                setResults(data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching search results:', error);
                setLoading(false);
            }
        };

        if (query) {
            fetchSearchResults();
        }
    }, [query, axiosSecure]);
    if (loading) {
        return "Loading"
    }

    return (
        <div>
            <div>
                <h3 className="text-4xl font-bold text-center">Search results for stock</h3>
            </div>
            <div className="mt-20">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Quantity
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                results.map((result, index) => <tr key={index} className="bg-white border-b">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        {
                                            result.id
                                        }
                                    </th>
                                    <td className="px-6 py-4">
                                        {
                                            result.name
                                        }
                                    </td>
                                    <td className="px-6 py-4">
                                        {
                                            result.quantity
                                        }
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

export default SearchResultsManageStocks;