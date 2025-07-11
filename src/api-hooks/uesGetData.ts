import type { movies } from "../type/interface";
import { useQuery } from "@tanstack/react-query";
import api from "../utils/axoisInstance";

interface TMDBResponse {
  results: movies[];
  total_pages: number;
}

const getData = async (page: number, genreId?: number) => {
  const params: Record<string, number > = {
    page,
  };

  if (genreId) {
    params.with_genres = genreId;
  }

  const { data } = await api.get<TMDBResponse>("/discover/movie", {
    params,
  });

  return {
    results: data.results,
    total_pages: data.total_pages,
  };
};

export const useGetData = (page: number, genreId?: number) => {
  return useQuery({
    queryKey: ["movies", page, genreId],
    queryFn: () => getData(page, genreId),
  });
};
