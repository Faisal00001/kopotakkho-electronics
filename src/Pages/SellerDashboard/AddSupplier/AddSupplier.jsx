import toast from "react-hot-toast";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";


const AddSupplier = () => {
    const axiosSecure = useAxiosSecure()
    const handleAddSupplier = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const phone = form.phone.value
        const address = form.address.value
        const gstin = form.gstin.value
        const supplierData = { name, phone, address, email, gstin };
        axiosSecure.post('/suppliers/', supplierData)
            .then(() => {
                toast.success('Supplier added successfully')
                form.reset()
            })
            .catch(error => console.log('An error occurred' || error.message))

    }
    return (
        <div>
            <div className="mb-20 flex items-center justify-between">

                <h3 className="text-4xl font-bold text-center flex-grow">Add a new supplier</h3>
                <button
                    type="button"
                    className="text-white btn bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center"
                    onClick={() => window.history.back()}
                >
                    Go Back
                </button>
            </div>
            <div>


                <form onSubmit={handleAddSupplier} className="max-w-sm mx-auto">
                    <div className="mb-5">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-none" placeholder="Name" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-none" placeholder="Email" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                        <input type="text" name="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-none" placeholder="Phone" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                        <input type="text" name="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-none" placeholder="Address" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="gstin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gstin</label>
                        <input type="text" name="gstin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-none" placeholder="Gstin" required />
                    </div>

                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>


            </div>
        </div>
    );
};

export default AddSupplier;