import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
    const { id, title, image, price } = product
    return (
        <div>
            <div className="rounded">
                <img className="h-[220px]" src={image} alt={title} />
                <div className="px-2  py-2 mt-5">
                    <div className="h-[50px]">
                        <Link to={`/productDetails/${id}`}>
                            <div className="text-base mb-2 cursor-pointer hover:underline">{title}</div>

                        </Link>
                    </div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask w-4 mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-2" className="mask w-4 mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-2" className="mask w-4 mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-2" className="mask w-4 mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-2" className="mask w-4 mask-star-2 bg-yellow-400" />

                    </div>
                    <div>
                        <h3 className="font-semibold text-2xl">{price} BDT</h3>
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