import image1 from "../../assets/images/banner/image1.jpg";
import image2 from "../../assets/images/banner/image2.jpg";
import image3 from "../../assets/images/banner/image3.jpg";
// Swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// test purpose

import offer1 from "../../assets/special_offer/offer1.png"
import offer2 from "../../assets/special_offer/offer2.png"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { useState } from "react";
import { motion } from "framer-motion";
import useProducts from "../hooks/useProducts";
import { Link, useNavigate } from "react-router-dom";

import NoData from "../../assets/Data_not_found/Data_not_found.png"
// import required modules
const Banner = () => {
    const navigate = useNavigate()
    const [isFliped, setIsFliped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const handleFliped = () => {
        setIsFliped(!isFliped)
        setIsAnimating(true)
    }
    const [products, loading] = useProducts()
    if (loading) {
        return <div className="flex justify-center">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }
    const hotOffersProduct = products?.data?.filter(product => product.hot_deal === true) || []
    return (
        <div className="container mx-auto mt-10 m-24">
            <div className="hidden lg:block">
                <div className="flex gap-5 items-center">
                    {/* <div className="bg-blue-800 rounded w-1/2 h-[600px]">
                        <img className="w-[50%] mx-auto mt-5 h-[230px]" src={image1} alt="" />
                        <h3 className="text-5xl mt-5 text-center font-semibold text-slate-50 bg-red-500 py-5 px-10">Top Deals</h3>
                        <h3 className="text-4xl text-slate-50 mt-5 font-bold text-center px-5">Don't miss out on this week's hottest deals</h3>
                        <div className="flex justify-center pb-10">
                            <button className="px-8 py-4 mt-10  bg-white text-blue-800 rounded text-sm font-semibold">Shop Now</button>
                        </div>

                    </div> */}
                    <div className="flex items-center justify-center cursor-pointer">
                        <div className="flip-card w-[600px] h-[600px] rounded-md" onMouseEnter={handleFliped}>
                            <motion.div
                                className="flip-card-inner w-[100%] h-[100%]"
                                initial={false}
                                animate={{ rotateY: isFliped ? 180 : 360 }}
                                transition={{ duration: 0.6, animationDirection: "normal" }}
                                onAnimationComplete={() => setIsAnimating(false)}
                            >
                                <div className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4" style={{
                                    backgroundImage: `url(${offer1})`
                                }}>
                                    {/* <h1 className="text-2xl font-bold">Sky</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur</p> */}
                                </div>
                                <div className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4" style={{
                                    backgroundImage: `url(${offer2})`
                                }}>
                                    {/* <h1 className="text-2xl font-bold">Maize</h1> */}
                                    {/* <p>Lorem ipsum dolor sit amet consectetur</p> */}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="w-[50%] h-[600px]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            {
                                Array.isArray(hotOffersProduct) && hotOffersProduct.length > 0 ? (
                                    hotOffersProduct.slice(0, 4).map((product, index) => (
                                        <div key={index} className="card card-compact border-[1px] border-gray-300 bg-base-100 shadow-lg transition-transform duration-300 hover:scale-105 h-[290px]">
                                            <figure className="overflow-hidden rounded-lg">
                                                <img className="h-[167px] w-full object-contain transition-transform duration-500 hover:scale-110" src={product.image} alt={product.title} />
                                            </figure>
                                            <div className="card-body">
                                                <h2 className="text-base font-bold">{product.title}</h2>
                                                <div className="card-actions justify-end">
                                                    <Link to={`/productDetails/${product.id}`} className="py-2 px-3 rounded-md bg-black hover:bg-gray-800 text-white">View Details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="flex flex-col justify-center items-center mt-10 space-y-4 ml-10">
                                        <img
                                            className=" opacity-75 transition duration-300 hover:scale-105 shadow-md"
                                            src={NoData}
                                            alt="No data available"
                                        />
                                        <p className="text-gray-500 text-lg font-semibold">No products available at the moment</p>
                                    </div>
                                )
                            }
                        </div>
                        {/* <div className="flex">
                            <div className="flex-1 bg-blue-900 px-2 h-[290px] rounded rounded-r-none">
                                <h3 className="text-2xl font-bold text-center text-slate-50 mt-3">Ultimate</h3>
                                <h3 className="text-2xl font-bold text-center  text-yellow-300">Appliance Event</h3>
                                <p className="text-slate-200 text-center text-sm font-bold">Sponsored by <span className="text-slate-50">SAMSONG</span></p>
                                <p className="text-white mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident neque iusto nesciunt magni laboriosam repellendus impedit tempora </p>
                                <button className="bg-white py-2 px-3 text-sm rounded text-blue-800 font-semibold mt-3">
                                    Shop Now
                                </button>
                            </div>
                            <div className="flex-1">
                                <img className="h-full rounded rounded-l-none" src={image2} alt="" />
                            </div>
                        </div>
                        <div className="flex mt-5 gap-x-5 h-[290px]">
                            <div className="card card-compact w-96 bg-slate-200 shadow-xl ">
                                <figure><img src={image3} alt="Shoes" /></figure>
                                <div className="card-body">

                                    <p>Save up to 35% on select outdoor living essentials.</p>
                                    <div className="card-actions justify-center">
                                        <button className="btn text-white bg-blue-700 hover:bg-blue-800">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-compact w-96 bg-base-100 shadow-xl bg-gradient-to-r from-blue-500 to-blue-800">
                                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">

                                    <p>Find a gift Mom will love—and that fits your budget, too.</p>
                                    <div className="card-actions justify-center">
                                        <button className="btn text-blue-800 bg-white">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <button onClick={() => {
                        navigate('/hotDeal')
                    }} className="btn bg-blue-700 hover:bg-blue-700 text-white">Show More</button>
                </div>
            </div>
            <div className="block lg:hidden">
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper pb-14"
                >
                    <SwiperSlide className="px-5 md:px-0">
                        <div className="bg-blue-800 rounded pb-10 md:pb-0 md:h-[600px]">
                            <div className="flex flex-col-reverse md:flex-row items-center md:pt-[170px]">
                                <div className="w-full md:w-[50%] mt-10">
                                    <div className="flex  relative justify-center">
                                        <div style={{
                                            backgroundColor: '#EF4444',
                                            transform: 'skew(-25deg)',
                                            width: '240px', // Adjust width as needed
                                            height: '60px', // Adjust height as needed
                                        }}>

                                        </div>
                                        <div className="absolute top-[20%]">
                                            <h3 className="text-2xl md:text-3xl font-bold text-slate-50">Top Deals</h3>
                                        </div>
                                    </div>
                                    <h3 className="text-xl md:text-2xl text-slate-50 mt-5 font-bold text-center px-5">Don't miss out on this week's hottest deals</h3>
                                    <div className="pl-14">
                                        <button className="px-6 py-3 mt-10  bg-white text-blue-800 rounded text-sm font-semibold">Shop Now</button>
                                    </div>
                                </div>
                                <div className="w-[80%] md:w-[50%] mt-10 md:pr-5">
                                    <img className="" src={image1} alt="" />
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    {
                        hotOffersProduct.length > 0 ? hotOffersProduct.slice(0, 4).map((product, index) => <SwiperSlide key={index} className="px-5 md:px-0">
                            <div className="card card-compact border-[1px] border-gray-300 bg-base-100">
                                <figure>
                                    <img className="h-[167px]"
                                        src={product.image}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product.title}</h2>

                                    <div className="card-actions justify-end">
                                        <Link to={`/productDetails/${product.id}`} className="btn bg-black hover:bg-black text-white">View Details</Link>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>

                        ) : "No data"
                    }



                </Swiper>
                <div className="flex justify-center mt-10">
                    <button onClick={() => {
                        navigate('/hotDeal')
                    }} className="btn bg-blue-700 hover:bg-blue-700 text-white">Show More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;