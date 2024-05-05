import { useEffect, useState } from "react";


const ShopByCategory = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://www.kopotakkhoelectronics.com/api/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setProducts(result);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData()

    }, [])
    console.log(products)

    return (
        <div className="container mx-auto">
            <h3 className="text-2xl font-bold my-24 text-center">Shop by category</h3>
        </div>
    );
};

export default ShopByCategory;