import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://www.kopotakkhoelectronics.com/api'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;