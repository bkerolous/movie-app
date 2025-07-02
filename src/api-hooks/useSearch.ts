import type { movies } from "../type/interface"
import { useQuery } from '@tanstack/react-query';
import api from "../utils/axoisInstance";

const getData = async (search: string, media_type: "movie" | "multi") => {
    const { data } = await api.get(`search/${media_type}`, {
        params: {
            query: search
        }
    }
    )
    return data.results as movies[];
}

export const useSearchData = (search: string, media_type: "movie" | "multi") => {
    return useQuery({
        queryKey: ['movies', search, media_type],
        queryFn: () => getData(search, media_type),
        enabled: search.trim().length > 0
    })
}

