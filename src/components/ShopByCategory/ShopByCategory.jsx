import CategoryCard from "../CategoryCard/CategoryCard";
import useCategories from "../hooks/useCategories";
import NoData from "../../assets/Data_not_found/Data_not_found.png"

const ShopByCategory = () => {
    const [categories, loading] = useCategories()

    if (loading) {
        return <div className="flex justify-center">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }

    return (
        <div className="container mx-auto">
            <h3 className="text-2xl font-bold my-24 text-center">Shop by category</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5 px-5 md:px-0">
                {
                    !categories?.data || categories.data.length === 0 ? (
                        <div className="col-span-1 md:col-span-4 lg:col-span-6 flex flex-col justify-center items-center mt-10 space-y-4 animate-fadeIn">
                            <img
                                className="w-32 h-32 opacity-90 transition duration-300 transform hover:scale-105 rounded-full shadow-lg"
                                src={NoData}
                                alt="No categories available"
                            />
                            <p className="text-gray-500 text-lg font-medium">No categories available at the moment</p>
                            {/* <button
                                onClick={() => window.location.reload()}
                                className="px-5 py-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none transition duration-300"
                            >
                                Refresh
                            </button> */}
                        </div>
                    ) : (
                        categories.data.map(category => (
                            <CategoryCard key={category.id} category={category}></CategoryCard>
                        ))
                    )
                }
            </div>


        </div>
    );
};

export default ShopByCategory;