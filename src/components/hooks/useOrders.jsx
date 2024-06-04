import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useOrders = () => {
    // http://127.0.0.1:8000/api/customer/1/order-items/
    const axiosPublic = useAxiosPublic()
    const user = JSON.parse(localStorage.getItem('user'))
    const userId = user.id
    const { data: userOrders = [], isPending: loading, refetch } = useQuery({
        queryKey: ['userOrders'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/customer/${userId}/order-items/?format=json`);
            return res.data;
        }
    })


    return [userOrders, loading, refetch]
};

export default useOrders;