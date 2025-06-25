import axios from "axios"
import type { movies } from '../type/interface';
import { useQuery } from "@tanstack/react-query";

const getDetails = async (id: number, media_type: string) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}:${media_type}?append_to_response=videos`, {
        params: {
            api_key: '7082867fc373d072c7bccae5cf8d5b32'
        }
    })
    return data as movies;
}

export const useDetails = (id: number, media_type: string) => {
    return useQuery({
        queryKey: ['details', id, media_type],
        queryFn: () => getDetails(id, media_type)
    })
}