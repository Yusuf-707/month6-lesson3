import { $api } from "../../api/api"
import {useQuery} from "@tanstack/react-query"

export const getProducts = async () => {
    const response = await $api.get('/products')
    return response.data
}

export const useProducstList = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: getProducts
    })
}