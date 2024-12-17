import toast from "react-hot-toast";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const AddStock = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    const axiosSecure = useAxiosSecure()
    const handleAddStock = async (event) => {
        event.preventDefault();

        // Validate user authentication and role
        if (!user || !user?.isSeller) {
            toast.error('Error: Vendor not active');
            return;
        }

        // Extract form data
        const form = event.target;
        const name = form.stockName.value.trim();
        const quantity = parseInt(form.quantity.value, 10);

        // Validate form inputs
        if (!name || isNaN(quantity) || quantity <= 0) {
            toast.error('Error: Please provide valid product details');
            return;
        }

        try {
            // Send API request
            const response = await axiosSecure.post('/stocks/', {
                name,
                quantity,
                vendor: user.id
            });

            // Handle response
            if (response.status >= 200 && response.status < 300) {
                toast.success('Product added successfully');
                form.reset();
            }
        } catch (error) {
            // Handle and display server error message
            if (error.response && error.response.data) {
                const serverMessage = error.response.data.name?.[0] || 'An error occurred';
                toast.error(serverMessage);
            } else {
                toast.error('An error occurred. Please try again.');
            }

            console.error('Error adding stock:', error);
        }
    };


    return (
        <div>
            <div>
                <h3 className="text-4xl font-bold text-center">Adding a new stock</h3>
            </div>
            <div className="mt-20">


                <form onSubmit={handleAddStock} className="max-w-sm mx-auto">
                    <div className="mb-5">
                        <label htmlFor="stockName" className="block mb-2 text-sm font-medium text-gray-900 ">Stock name</label>
                        <input type="text" id="stockName" name="stockName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Stock name" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900">Qunatity</label>
                        <input type="number" id="quantity" name="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>

                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add stock</button>
                </form>
                {/* Back Button */}
                <div className="flex justify-center mt-20">
                    <Link to={'/sellerDashboard/manageStock'} className="btn btn-neutral w-[34%]">Back</Link>
                </div>

            </div>
        </div>
    );
};

export default AddStock;