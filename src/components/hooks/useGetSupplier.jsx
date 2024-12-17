import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import { useState } from "react";


const useGetSupplier = () => {
    const axiosSecure = useAxiosSecure()
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const { data: suppliers = [], isPending: loading, refetch } = useQuery({
        queryKey: ['suppliers', currentPage],
        queryFn: async () => {
            const res = await axiosSecure.get(`/suppliers/?page=${currentPage} && format=json`);
            setTotalPage(Math.ceil(res.data.count / 1))
            return res.data;
        }
    })


    return [suppliers, loading, refetch, currentPage, setCurrentPage, totalPage, setTotalPage]
};

export default useGetSupplier;