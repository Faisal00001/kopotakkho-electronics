import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import backgroundImage from "../../assets/images/CategoryDetails/bg.jpg";
import image1 from "../../assets/images/CategoryDetails/tv.jpg";
import MenuEntry from "../../components/MenuEntry/MenuEntry";
import ProductCard from "../../components/ProductCard/ProductCard";
import useCategories from "../../components/hooks/useCategories";
import useProducts from "../../components/hooks/useProducts";
const CategoryDetails = () => {
    const [showCategoriesOptions, setShowCategoriesOptions] = useState(false)
    let { id } = useParams()
    let idInt = parseInt(id)
    const [products, loading] = useProducts()
    const [categories] = useCategories()
    if (loading) {
        return "Loading"
    }
    const categoryName = categories.data.find(category => category.id === idInt)
    const categoryWiseProducts = products?.data.filter(product =>
        product.category === idInt
    )


    return (
        <div>
            <div className="container mx-auto mt-5 mb-10">
                <div className="flex gap-1">
                    <Link to={'/'} className="text-blue-800 text-sm hover:underline flex items-center gap-2">Home <FaChevronRight className="text-slate-600 text-xs" /> </Link>
                    <h3 className="text-sm">{categoryName.title}</h3>
                </div>
                <h3 className="text-3xl mt-5 font-medium">{categoryName.title}</h3>

            </div>
            <div className="flex justify-center items-center" style={
                {
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '70vh'
                }
            }>
                <div className="flex justify-center items-center gap-5">
                    <div className="w-[50%] flex justify-center">
                        <div className="w-[85%]">
                            <img src={image1} alt="" />
                        </div>
                    </div>
                    <div className="w-[50%]">
                        <h3 className="text-3xl font-bold">Bring the cinematic <br /> experience home.</h3>
                        <p className="mt-5 font-light">Shop TVs, home theatre and audio, accessories, and more.</p>
                    </div>
                </div>

            </div>
            <div className="container mx-auto my-14">
                <h3 className="text-2xl font-bold text-center">Shop {categoryName.title} by category</h3>
                {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-5 lg:grid-cols-6 px-5 md:px-0 mt-10">
                    {
                        categoryWiseProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                    }
                </div> */}
                <div>
                    <div className="mt-20">
                        <div className="grid grid-cols-5 divide-x-2">
                            <div className="col-span-1">
                                <div onClick={() => setShowCategoriesOptions(!showCategoriesOptions)} className={`flex items-center justify-between pr-2  cursor-pointer hover:text-blue-800`}>
                                    <h3 className="font-medium text-sm select-none">Categories</h3>
                                    {
                                        showCategoriesOptions ? <IoIosArrowUp className="text-xl" /> : <IoIosArrowDown className="text-xl" />
                                    }


                                </div>
                                <div className={`mt-2 ${showCategoriesOptions ? 'block' : 'hidden'}`}>
                                    {
                                        categories?.data.map(category => <MenuEntry key={category.id} option={category}></MenuEntry>)
                                    }
                                </div>
                                <hr className="my-4" />
                                <div onClick={() => setShowCategoriesOptions(!showCategoriesOptions)} className={`flex items-center justify-between pr-2 cursor-pointer hover:text-blue-800`}>
                                    <h3 className="font-medium text-sm select-none">Shipping and Pickup</h3>

                                    {
                                        showCategoriesOptions ? <IoIosArrowUp className="text-xl" /> : <IoIosArrowDown className="text-xl" />
                                    }
                                </div>
                                <div className={`mt-2 ${showCategoriesOptions ? 'block' : 'hidden'}`}>
                                    {
                                        categories?.data.map(category => <MenuEntry key={category.id} option={category}></MenuEntry>)
                                    }
                                </div>
                                <hr className="mt-4" />
                            </div>
                            <div className="col-span-4 pl-5">
                                <div className="bg-[#ECECEC] rounded-md flex justify-between items-center px-5 py-6">
                                    <div>
                                        <p className="text-sm">{categoryWiseProducts.length} results</p>
                                    </div>
                                    <div>
                                        <div className="relative">
                                            <input className="focus:outline-none w-auto lg:w-[300px] py-3 pl-3 hidden lg:block rounded-sm text-sm" type="text" placeholder="Search Here.." />
                                            <IoSearchSharp className="absolute hidden lg:block cursor-pointer text-blue-700 text-xl top-[25%] right-3" />

                                        </div>
                                    </div>
                                </div>
                                <div className="my-5">
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-5 md:px-0 mt-10">
                                        {
                                            categoryWiseProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                                        }
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

export default CategoryDetails;