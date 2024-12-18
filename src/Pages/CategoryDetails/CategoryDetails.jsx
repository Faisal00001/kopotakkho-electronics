import { useEffect, useState } from "react";
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
import useCategoryWiseProducts from "../../components/hooks/useCategoryWiseProducts";
import noData from "../../assets/Data_not_found/Data_not_found.png"
const CategoryDetails = () => {
    const [showCategoriesOptions, setShowCategoriesOptions] = useState(false)
    let { id } = useParams()
    let idInt = parseInt(id)
    // const itemsPerPage = 10;
    // const [isloading, setIsLoading] = useState(false);
    // const [productContainer, setProductContainer] = useState([])
    // const [totalPages, setTotalPages] = useState(0);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [products, loading] = useProducts()
    const [categories, loading] = useCategories()
    const [categoryWiseProducts, categoryWiseloading] = useCategoryWiseProducts(idInt)
    // useEffect(() => {
    //     const fetchProducts = async (page) => {
    //         setIsLoading(true);
    //         try {
    //             const response = await fetch(
    //                 `https://kopotakkhoelectronics.com/api/products/?category=${idInt}&page=${page}`
    //             );
    //             if (!response.ok) {
    //                 throw new Error("Failed to fetch products");
    //             }
    //             const data = await response.json();
    //             setProductContainer(data.data || []);
    //             const totalItems = data.count || 0;
    //             setTotalPages(Math.ceil(totalItems / itemsPerPage));
    //         } catch (error) {
    //             console.error("Error fetching products:", error);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     };
    //     fetchProducts(currentPage);
    // }, [idInt, currentPage]);


    if (loading) {
        return "Loading"
    }
    if (categoryWiseloading) {
        return ""
    }
    const categoryName = categories.data?.find(category => category.id === idInt)

    // const categoryWiseProducts = products?.data.filter(product =>
    //     product.category === idInt
    // )



    return (
        <div>
            <div className="container mx-auto mt-5 mb-10">
                <div className="flex gap-1 pl-5 md:pl-0">
                    <Link to={'/'} className="text-blue-800 text-sm hover:underline flex items-center gap-2">Home <FaChevronRight className="text-slate-600 text-xs" /> </Link>
                    <h3 className="text-sm">{categoryName.title}</h3>
                </div>
                <h3 className="text-3xl pl-5 md:pl-0 mt-5 font-medium">{categoryName.title}</h3>

            </div>
            <div className="flex justify-center items-center" style={
                {
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '70vh'
                }
            }>
                <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                    <div className="w-full md:w-[50%] flex justify-center">
                        <div className="w-[85%]">
                            <img className="h-[423px]" src={categoryName.category_image} alt="" />
                        </div>
                    </div>
                    <div className="w-full md:w-[50%] pl-6 md:pl-0">
                        <h3 className="text-2xl md:text-3xl font-bold">Bring the cinematic <br /> experience home.</h3>
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
                        <div className=" block md:hidden">
                            <div onClick={() => setShowCategoriesOptions(!showCategoriesOptions)} className={`flex items-center justify-between pr-2  cursor-pointer hover:text-blue-800`}>
                                <h3 className="font-bold select-none text-2xl">Categories</h3>
                                {
                                    showCategoriesOptions ? <IoIosArrowUp className="text-xl" /> : <IoIosArrowDown className="text-xl" />
                                }


                            </div>
                            <div className={`mt-2 ${showCategoriesOptions ? 'block' : 'hidden'}`}>
                                {
                                    categories?.data.map(category => <MenuEntry key={category.id} option={category}></MenuEntry>)
                                }
                            </div>
                            {/* <hr className="my-4" />
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
                                <hr className="mt-4" /> */}
                            <hr className="mt-4" />
                        </div>
                        <div className="grid grid-cols-5 divide-x-2">
                            <div className="col-span-1 hidden md:block">
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
                                {/* <hr className="my-4" />
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
                                <hr className="mt-4" /> */}
                                <hr className="mt-4" />
                            </div>
                            <div className="col-span-5 md:col-span-4 px-5 md:pl-5">
                                <div className="bg-[#ECECEC] rounded-md flex justify-between items-center px-5 py-6">
                                    <div>
                                        <p className="hidden md:block text-sm">
                                            {categoryWiseProducts?.data?.length || 0} results
                                        </p>
                                        <div className="flex gap-5 items-center">
                                            <div className="flex items-center gap-3">
                                                <input type="checkbox" className="toggle toggle-sm" defaultChecked />
                                                <div>
                                                    <p className="text-sm">In Stock</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <input type="checkbox" className="toggle toggle-sm" defaultChecked />
                                                <div>
                                                    <p className="text-sm">Best buy only</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-5 items-center mt-3">
                                            <div className="dropdown">
                                                <div
                                                    tabIndex={0}
                                                    role="button"
                                                    className="btn m-1 border-2 bg-white border-blue-500 hover:bg-white hover:border-blue-500 px-10 font-normal"
                                                >
                                                    Filter
                                                </div>
                                                <ul
                                                    tabIndex={0}
                                                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                                                >
                                                    <li>
                                                        <a>Item 1</a>
                                                    </li>
                                                    <li>
                                                        <a>Item 2</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="dropdown">
                                                <div
                                                    tabIndex={0}
                                                    role="button"
                                                    className="btn m-1 border-2 border-blue-500 bg-white px-10 hover:bg-white hover:border-blue-500 font-normal"
                                                >
                                                    Best match
                                                </div>
                                                <ul
                                                    tabIndex={0}
                                                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                                                >
                                                    <li>
                                                        <a>Item 1</a>
                                                    </li>
                                                    <li>
                                                        <a>Item 2</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="relative">
                                            <input
                                                className="focus:outline-none w-auto lg:w-[300px] py-3 pl-3 hidden lg:block rounded-sm text-sm"
                                                type="text"
                                                placeholder="Search Here.."
                                            />
                                            <IoSearchSharp className="absolute hidden lg:block cursor-pointer text-blue-700 text-xl top-[25%] right-3" />
                                        </div>
                                    </div>
                                </div>
                                <div className="my-5">
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-5 md:px-0 mt-10">
                                        {categoryWiseProducts?.data?.length > 0 ? (
                                            categoryWiseProducts?.data?.map((product) => (
                                                <ProductCard key={product.id} product={product} />
                                            ))
                                        ) : (
                                            <div className="flex flex-col justify-center items-center w-full">
                                                <img
                                                    src={noData} // Replace with your image path
                                                    alt="No products available"
                                                    className="w-1/2 mb-5"
                                                />
                                                <p className="text-center text-xl font-semibold">No Products Available</p>
                                            </div>
                                        )}
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