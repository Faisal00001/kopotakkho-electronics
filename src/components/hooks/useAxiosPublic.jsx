import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: 'https://www.kopotakkhoelectronics.com/api'
    baseURL: 'http://127.0.0.1:8000/api'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;