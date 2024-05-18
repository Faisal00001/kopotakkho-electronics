import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaTruck } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiDiscountPercentLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import ProductDetailsSlider from "../../components/ProductDetailsSlider/ProductDetailsSlider";




// import required modules

const ProductDetails = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [product, setProduct] = useState(null)
    const { id } = useParams()

    const productIdInt = parseInt(id)
    const { cartItems, setCartItems } = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Start loading
                setIsLoading(true);

                // Make a GET request to the API endpoint
                const response = await axios.get(`http://127.0.0.1:8000/api/product/${productIdInt}/?format=json`);

                // Extract the data from the response
                const fetchedData = response.data;

                // Update state with fetched data
                setProduct(fetchedData);
            } catch (error) {
                // Handle errors
                setError(error.message);
            } finally {
                // Finish loading
                setIsLoading(false);
            }
        };

        // Call the fetchData function when the component mounts
        fetchData();
    }, [productIdInt]);
    if (isLoading) {
        return "Loading"
    }

    const handleAddToCart = (product) => {
        const isFound = cartItems.find(cartItem => cartItem.id === product.id)
        if (!isFound) {
            const newCartItems = [...cartItems, product]
            setCartItems(newCartItems)
            toast.success('Success! Your item has been added to the cart.')
        }
    }

    return (
        <div>
            <div className="container mx-auto">
                <div className="flex gap-3 cursor-pointer mt-5 items-center ">
                    <h3 className="text-sm hover:underline text-blue-800">Home</h3>
                    <MdKeyboardArrowRight />
                    <h3 className="text-sm hover:underline text-blue-800">Tv</h3>
                    <MdKeyboardArrowRight />
                    <h3 className="text-sm">Product Details</h3>
                </div>
                <div className="mt-20">
                    <div className="flex gap-10">
                        <div className="flex-1">

                            <div className="w-[600px]">
                                <ProductDetailsSlider product={product} ></ProductDetailsSlider>
                            </div>

                        </div>
                        <div className="flex-1">
                            <p className="text-xl font-semibold">{product?.title}</p>
                            <p className="mt-3 text-sm">{product?.detail}</p>
                            <div className="flex gap-2 mt-2 items-center">
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask w-4 mask-star-2 bg-yellow-400" />
                                    <input type="radio" name="rating-2" className="mask w-4 mask-star-2 bg-yellow-400" />
                                    <input type="radio" name="rating-2" className="mask w-4 mask-star-2 bg-yellow-400" />
                                    <input type="radio" name="rating-2" className="mask w-4 mask-star-2 bg-yellow-400" />
                                    <input type="radio" name="rating-2" className="mask w-4 mask-star-2 bg-yellow-400" />
                                </div>
                                <p className="text-xs mt-1 text-blue-800 cursor-pointer">4.6(563 Reviews)</p>
                                <div className="flex mt-1 gap-2 ml-3 items-center">

                                    <p className="text-xs text-blue-800 hover:underline cursor-pointer">Write your review</p>
                                    <MdKeyboardArrowRight className="cursor-pointer text-blue-800" />
                                </div>
                            </div>
                            <div className="mt-3">
                                <p className="text-sm font-medium">Sold and shipped by kappotakko Electronics</p>
                            </div>
                            <div className="mt-5">
                                <h3 className="text-2xl font-bold">${product?.price}</h3>
                            </div>
                            <div className="mt-5 flex justify-between">
                                <div className="flex gap-2 items-center">
                                    <div><RiDiscountPercentLine className="text-2xl" /></div>
                                    <div><p className="text-sm font-semibold">2 special offers available!</p></div>
                                </div>
                                <div className="text-blue-800 font-medium cursor-pointer flex items-center">
                                    <p className="text-sm hover:underline">See all 2 offers</p>
                                    <MdKeyboardArrowRight />
                                </div>
                            </div>
                            <div className="mt-5 w-[90%] mx-auto border-2 group border-black hover:border-blue-800 cursor-pointer">
                                <div className="flex justify-between px-5 items-center py-3">
                                    <p className="text-xs text-blue-800 font-bold group-hover:underline">Save up to 20% on select Rocketfish HDMI cables when you buy any TV.*</p>
                                    <MdKeyboardArrowRight className="text-blue-800 text-2xl" />
                                </div>
                            </div>
                            <hr className="my-5" />
                            <div className="bg-[#ECECEC]">
                                <div className="py-7">
                                    <div className="flex justify-center">
                                        <button className="bg-blue-900 text-white text-sm font-medium py-4 px-20 rounded">Delivery</button>
                                        <button className="text-blue-800 py-4 px-20 text-sm font-medium bg-white rounded">Pick Up</button>
                                    </div>
                                    <div className="mt-8 flex gap-2 items-center pl-24">
                                        <FaTruck className="text-2xl" />
                                        <p className="font-medium">Available to ship</p>
                                    </div>
                                    <div className="pl-32 mt-5">
                                        <p className="text-sm">This will be delivered as early as May 15, 2024</p>
                                        <p className="mt-2 text-sm">Enjoy <span className="text-blue-800 font-semibold"> fast, free shipping</span> on <span className="font-semibold">most orders over $35.</span></p>
                                    </div>
                                    <div onClick={() => handleAddToCart(product)} className="pl-32 mt-5">
                                        <button className="text-black bg-yellow-500 hover:bg-yellow-400  font-medium rounded text-sm px-36 py-4 text-center">Add to Cart</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;