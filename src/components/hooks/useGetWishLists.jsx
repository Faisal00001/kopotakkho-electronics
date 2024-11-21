
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useGetWishLists = () => {
    // http://94.72.116.88/api/customer/1/order-items/
    const axiosPublic = useAxiosPublic()
    const user = JSON.parse(localStorage.getItem('user'))
    const customerId = user.id

    const { data: wishLists = [], isPending: loading, refetch } = useQuery({
        queryKey: ['wishLists'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/customer/${customerId}/wishitems/?format=json`);
            return res.data
        }
    })


    return [wishLists, loading, refetch]
};

export default useGetWishLists;