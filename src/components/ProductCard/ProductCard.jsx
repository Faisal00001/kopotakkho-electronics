import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
    const { id, title, detail, price } = product
    return (
        <div>
            <div className="rounded w-[200px]">
                <img src="https://www.nexus.com.bd/images/blog/6/router-price-in-bangladesh.jpg" alt={title} />
                <div className="px-2 py-2 mt-5">
                    <Link to={`/productDetails/${id}`}>
                        <div className="text-base mb-2 cursor-pointer hover:underline">{detail}</div>

                    </Link>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask w-4 mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-2" className="mask w-4 mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-2" className="mask w-4 mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-2" className="mask w-4 mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-2" className="mask w-4 mask-star-2 bg-yellow-400" />

                    </div>
                    <div>
                        <h3 className="font-semibold text-2xl">${price}</h3>
                    </div>
                    <div className="flex gap-2 items-center mt-5">
                        <FaCheck className="text-green-500" />
                        <p className="tex-sm">Available to ship</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;