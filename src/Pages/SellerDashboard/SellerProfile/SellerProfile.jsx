import { useCallback, useEffect, useState } from "react";
import useAxiosPublic from "../../../components/hooks/useAxiosPublic";


const SellerProfile = () => {
    const axiosPublic = useAxiosPublic()
    const [profileData, setProfileData] = useState({
        id: '',
        user: {
            id: '',
            first_name: '',
            last_name: '',
            username: '',
            email: ''
        },
        profile_image: '',
        phone: ''
    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errors, setErrors] = useState({});
    const vendor = JSON.parse(localStorage.getItem('user'))
    const vendor_id = vendor.id
    const fetchProfileData = useCallback(async () => {
        axiosPublic.get(`/vendors/${vendor_id}/`)
            .then(response => {
                setProfileData(response.data)
            })
            .catch(error => console.log(error))
    }, [axiosPublic, vendor_id])
    useEffect(() => {
        fetchProfileData()
    }, [fetchProfileData])

    return (
        <div>
            <h3 className="text-2xl md:text-4xl font-bold text-center">Welcome {profileData?.user?.first_name}</h3>



            <form className="max-w-sm mx-auto my-10">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>


        </div>
    );
};

export default SellerProfile;