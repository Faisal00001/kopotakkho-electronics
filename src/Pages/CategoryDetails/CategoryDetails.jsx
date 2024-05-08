import { FaChevronRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import backgroundImage from "../../assets/images/CategoryDetails/bg.jpg";
import image1 from "../../assets/images/CategoryDetails/tv.jpg";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import useProducts from "../../components/hooks/useProducts";
const CategoryDetails = () => {
    let { id } = useParams()
    let idInt = parseInt(id)
    const [products, loading] = useProducts()
    if (loading) {
        return "Loading"
    }
    const categoryWiseProducts = products?.data.filter(product => {
        return product.id === idInt
    })
    const categoryName = products?.data[0]?.title
    console.log(categoryName)
    console.log(categoryWiseProducts)
    return (
        <div>
            <div className="container mx-auto mt-5 mb-10">
                <div className="flex gap-1">
                    <Link to={'/'} className="text-blue-800 text-sm hover:underline flex items-center gap-2">Home <FaChevronRight className="text-slate-600 text-xs" /> </Link>
                    <h3 className="text-sm">{categoryName}</h3>
                </div>
                <h3 className="text-3xl mt-5 font-medium">{categoryName}</h3>

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
                <h3 className="text-2xl font-bold text-center">Shop {categoryName} by category</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 lg:grid-cols-6 px-5 md:px-0 mt-10">
                    {
                        categoryWiseProducts.map(category => <CategoryCard key={category.id} category={category}></CategoryCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;