import axios from "axios"
import type { movies } from "../type/interface"
import { useQuery } from '@tanstack/react-query';

const getData = async (search: string, media_type: "movie" | "multi") => {
    const endPoint = `https://api.themoviedb.org/3/search/${media_type}`;
    const { data } = await axios.get(endPoint, {
        params: {
            query: search,
            api_key: `7082867fc373d072c7bccae5cf8d5b32`
        }
    })
    return data.results as movies[];
}

export const useSearchData = (search: string, media_type: "movie" | "multi") => {
    return useQuery({
        queryKey: ['movies', search, media_type],
        queryFn: () => getData(search, media_type),
        enabled: search.trim().length > 0
    })
}

