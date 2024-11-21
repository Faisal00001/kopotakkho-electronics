import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: 'http://94.72.116.88/api'
    baseURL: 'http://94.72.116.88/api'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;