import useOrders from "../../../components/hooks/useOrders";

const SellerOrders = () => {
    const [userOrders, loading] = useOrders()
    if (loading) {
        return "Loading"
    }
    console.log(userOrders.data)
    return (
        <div>
            <h3>Welcome to seller orders</h3>
            {
                userOrders.data.map((order, index) => <div key={index} className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{order.price}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default SellerOrders;