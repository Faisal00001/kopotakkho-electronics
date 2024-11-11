import { Link } from "react-router-dom";
import useProducts from "../../components/hooks/useProducts";


const HotDeal = () => {
    const [products, loading] = useProducts()
    if (loading) {
        return <div className="flex justify-center">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }
    const hotOffersProduct = products?.data?.filter(product => product.hot_deal === true)
    return (
        <div className="container mx-auto">
            <h3 className="text-2xl md:text-4xl font-bold text-center my-10">Our Hot Deal</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    hotOffersProduct?.map((product, index) =>
                        <div key={index} className="card card-compact md:w-96 bg-base-100 border-[1px] border-gray-200">
                            <figure>
                                <img
                                    src={product.image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.title}</h2>
                                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                                <div className="card-actions justify-end">
                                    <Link to={`/productDetails/${product.id}`} className="btn btn-primary">View Details</Link>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default HotDeal;