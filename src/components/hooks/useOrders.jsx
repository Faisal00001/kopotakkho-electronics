import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useOrders = () => {
    const axiosPublic = useAxiosPublic()
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user.id)
    const customerId = user.id;
    const { data: orders = [], isPending: loading, refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/customer/${customerId}/order-items/?format=json`);
            return res.data;
        }
    })


    return [orders, loading, refetch]
};

export default useOrders;