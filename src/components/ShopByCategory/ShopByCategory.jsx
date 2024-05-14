import CategoryCard from "../CategoryCard/CategoryCard";
import useCategories from "../hooks/useCategories";


const ShopByCategory = () => {
    const [categories, loading] = useCategories()
    if (loading) {
        return "Loading"
    }

    return (
        <div className="container mx-auto">
            <h3 className="text-2xl font-bold my-24 text-center">Shop by category</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 lg:grid-cols-6 px-5 md:px-0">
                {

                    !categories.data ? 'Data not' :
                        categories?.data.map(category => <CategoryCard key={category.id} category={category}></CategoryCard>)
                }
            </div>

        </div>
    );
};

export default ShopByCategory;