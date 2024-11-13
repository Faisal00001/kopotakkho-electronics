import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: 'https://kopotakkhoelectronics.com/api'
    baseURL: 'https://kopotakkhoelectronics.com/api'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;