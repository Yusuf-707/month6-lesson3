import { useQuery } from "@tanstack/react-query"
import { $api } from "../../api/api"

export const getDetail = async (id) => {
    const response = await $api.get(`/products/${id}`)
    return response.data
}

export const useDetailList = (id) => {
    return useQuery({
        queryKey: ["detail", id],
        queryFn: ()=> getDetail(id),
        enabled: !!id
    })
}