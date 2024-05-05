import image1 from "../../assets/images/banner/image1.jpg";
import image2 from "../../assets/images/banner/image2.jpg";
import image3 from "../../assets/images/banner/image3.jpg";
const Banner = () => {
    return (
        <div className="container mx-auto mt-10 m-24">
            <div className="flex gap-5 items-center">
                <div className="bg-blue-800 rounded w-1/2 h-[600px]">
                    <img className="w-[50%] mx-auto mt-5 h-[230px]" src={image1} alt="" />
                    <h3 className="text-5xl mt-5 text-center font-semibold text-slate-50 bg-red-500 py-5 px-10">Top Deals</h3>
                    <h3 className="text-4xl text-slate-50 mt-5 font-bold text-center px-5">Don't miss out on this week's hottest deals</h3>
                    <div className="flex justify-center pb-10">
                        <button className="px-8 py-4 mt-10  bg-white text-blue-800 rounded text-sm font-semibold">Shop Now</button>
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
    );
};

export default Banner;