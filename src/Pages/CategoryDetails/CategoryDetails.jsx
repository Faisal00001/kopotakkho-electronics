import { useParams } from "react-router-dom";
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
    console.log(categoryWiseProducts)
    return (
        <div>
            <h3>Welcome to Category Details</h3>
        </div>
    );
};

export default CategoryDetails;