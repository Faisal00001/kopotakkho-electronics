import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useEffect, useState } from "react";


const useOrders = () => {
    // https://kopotakkhoelectronics.com/api/customer/1/order-items/
    const axiosPublic = useAxiosPublic()
    const user = JSON.parse(localStorage.getItem('user'))
    const userId = user.id
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const { data: userOrders = [], isPending: loading, refetch } = useQuery({
        queryKey: ['userOrders', currentPage],
        queryFn: async () => {
            const res = await axiosPublic.get(`/customer/${userId}/order-items/?format=json&page=${currentPage}`);
            setTotalPage(Math.ceil(res.count / 1))
            return res.data;
        }
    })


    return [userOrders, loading, refetch, currentPage, setCurrentPage, totalPage, setCurrentPage]
};

export default useOrders;