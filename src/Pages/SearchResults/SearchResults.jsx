import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../components/hooks/useAxiosPublic";

const SearchResults = () => {
    const axiosPublic = useAxiosPublic()
    const [loading, setLoading] = useState(false)
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q');
    const navigate = useNavigate()
    const [results, setResults] = useState([]);
    useEffect(() => {
        setLoading(true)
        const fetchSearchResults = async () => {
            try {
                const response = await axiosPublic.get(`/search/?q=${query}`);
                const data = await response.data
                setResults(data);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        if (query) {
            fetchSearchResults();
        }
    }, [query, axiosPublic]);
    const showProductDetails = (product_id) => {
        if (query) {
            navigate(`/productDetails/${product_id}`)
        }
    }
    return (
        <div className="container mx-auto">
            <div className="mt-10 mb-10">
                <h3 className="text-3xl font-bold">Search Result...</h3>
            </div>
            <div>
                {
                    results.length === 0 ?
                        <>
                            <div>No data found</div>
                        </> :
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {
                                    results.map((product, index) => <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" key={index}>
                                        <div className="card bg-base-100 md:w-96 border-[1px] border-slate-300">
                                            <figure>
                                                <img
                                                    src={product.image}
                                                    alt="Product" />
                                            </figure>
                                            <div className="card-body ">
                                                <h2 className="card-title">{product.title}</h2>
                                                <p>{product.detail}</p>
                                                <div onClick={() => showProductDetails(product.id)} className="card-actions justify-end">
                                                    <button className="btn btn-primary">View Product</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>)
                                }
                            </div>
                        </>
                }
            </div>

        </div>
    );
};

export default SearchResults;