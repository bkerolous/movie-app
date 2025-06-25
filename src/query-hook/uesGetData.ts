import axios from "axios"
import type { movies } from "../type/interface"
import { useQuery } from "@tanstack/react-query"


const getData = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=7082867fc373d072c7bccae5cf8d5b32`)
    return data.results as movies[]
}

export const useGetData = () => {
    return useQuery({
        queryKey: ['movies'],
        queryFn: getData
    })
}