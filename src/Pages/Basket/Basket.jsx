import { MdRemoveShoppingCart } from "react-icons/md";


const Basket = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex justify-between ">
                    <div>
                        <h3 className="text-2xl mt-5">Your Cart</h3>
                        <h3 className="mt-5 text-xl font-semibold">Looks like it's empty!</h3>
                        <p className="text-sm mt-3">Why not add something?</p>
                    </div>
                    <div className="mt-14">
                        <MdRemoveShoppingCart className="text-8xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basket;