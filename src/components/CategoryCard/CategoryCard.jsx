import { Link } from "react-router-dom";


const CategoryCard = ({ category }) => {
    const { id, title } = category
    return (
        <div>
            <div className="rounded overflow-hidden">
                <img className="w-full" src="https://www.nexus.com.bd/images/blog/6/router-price-in-bangladesh.jpg" alt={title} />
                <div className="px-6 py-4">
                    <Link to={`categories/${id}`}>
                        <div className="text-base mb-2 cursor-pointer hover:underline">{title}</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;