import image1 from "../../assets/images/banner/image1.jpg";
import image2 from "../../assets/images/banner/image2.jpg";
import image3 from "../../assets/images/banner/image3.jpg";
// Swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// test purpose

import spaceCity from "../../assets/images/banner/city1.png"
import planet from "../../assets/images/banner/planet1.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { useState } from "react";
import { motion } from "framer-motion";


// import required modules
const Banner = () => {
    const [isFliped, setIsFliped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const handleFliped = () => {
        setIsFliped(!isFliped)
        setIsAnimating(true)
    }
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
                    <div className="flex items-center justify-center">
                        <div className="flip-card w-[600px] h-[600px] rounded-md" onMouseEnter={handleFliped}>
                            <motion.div
                                className="flip-card-inner w-[100%] h-[100%]"
                                initial={false}
                                animate={{ rotateY: isFliped ? 180 : 360 }}
                                transition={{ duration: 0.6, animationDirection: "normal" }}
                                onAnimationComplete={() => setIsAnimating(false)}
                            >
                                <div className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4" style={{
                                    backgroundImage: `url(${spaceCity})`
                                }}>
                                    <h1 className="text-2xl font-bold">Sky</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur</p>
                                </div>
                                <div className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4" style={{
                                    backgroundImage: `url(${planet})`
                                }}>
                                    <h1 className="text-2xl font-bold">Maize</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="w-[50%] h-[600px]">
                        <div className="flex">
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
                        </div>

                    </div>
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
                    <SwiperSlide className="px-5 md:px-0">
                        <div className="bg-blue-800 rounded pb-10 md:pb-0 md:h-[600px]">
                            <div className="flex flex-col-reverse md:flex-row items-center md:pt-[150px]">
                                <div className="w-full md:w-[50%] mt-10 pl-10 pr-5">
                                    <h3 className="text-2xl md:text-3xl font-bold text-center text-slate-50 mt-3">Ultimate</h3>
                                    <h3 className="text-2xl md:text-3xl font-bold text-center text-yellow-300">Appliance Event</h3>
                                    <p className="text-slate-200 text-base text-center font-bold mt-2">Sponsored by <span className="text-slate-50">SAMSONG</span></p>
                                    <p className="text-white mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident neque iusto nesciunt magni laboriosam repellendus impedit tempora </p>
                                    <button className="bg-white py-3 px-5 text-sm rounded text-blue-800 font-semibold mt-6">
                                        Shop Now
                                    </button>

                                </div>
                                <div className="w-[80%] md:w-[50%] mt-10 md:pr-5">
                                    <img className="" src={image2} alt="" />
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="px-5 md:px-0">
                        <div className="bg-slate-200 rounded pb-10 md:pb-0 md:h-[600px]">
                            <div className="flex flex-col-reverse md:flex-row items-center md:pt-[150px]">
                                <div className="w-full md:w-[50%] mt-10 pl-10 pr-5">
                                    <h3 className="text-2xl md:text-3xl font-bold text-black mt-3">Save up to 35% on select outdoor living essentials.</h3>


                                    <button className="bg-blue-800 py-3 px-5 text-sm rounded text-white font-semibold mt-6">
                                        Shop Now
                                    </button>

                                </div>
                                <div className="w-[80%] md:w-[50%] mt-10 md:pr-5">
                                    <img className="" src={image2} alt="" />
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="px-5 md:px-0">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-800 rounded pb-10 md:pb-0 md:h-[600px]">
                            <div className="flex flex-col-reverse md:flex-row items-center md:pt-[150px]">
                                <div className="w-full md:w-[50%] mt-10 pl-10 pr-5">
                                    <h3 className="text-2xl md:text-3xl font-bold text-black mt-3">Save up to 35% on select outdoor living essentials.</h3>


                                    <button className="bg-white py-3 px-5 text-sm rounded text-blue-800 font-semibold mt-6">
                                        Shop Now
                                    </button>

                                </div>
                                <div className="w-[80%] md:w-[50%] mt-10 md:pr-5">
                                    <img className="" src={image2} alt="" />
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Banner;