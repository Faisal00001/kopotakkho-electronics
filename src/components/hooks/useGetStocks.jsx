import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import { useState } from "react";


const useGetStocks = () => {
    const axiosSecure = useAxiosSecure()
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const { data: stocks = [], isPending: loading, refetch } = useQuery({
        queryKey: ['stocks', currentPage],
        queryFn: async () => {
            const res = await axiosSecure.get(`/stocks/?page=${currentPage} && format=json`);
            setTotalPage(Math.ceil(res.data.count / 1))
            return res.data;
        }
    })


    return [stocks, loading, refetch, currentPage, setCurrentPage, totalPage, setTotalPage]
};

export default useGetStocks;