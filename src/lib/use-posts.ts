import axios from "axios"
import { useQuery } from "@tanstack/react-query"

interface Data {
    userId : string,
    id : number,
    title : string,
    body : string
}

export const usePost = () => {
        return useQuery({
            queryKey : ['mydata'],
            queryFn : async () => {
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/')
                return data as Data[];
            },
        })
}
