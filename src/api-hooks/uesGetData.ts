import type { movies } from "../type/interface";
import { useQuery } from "@tanstack/react-query";
import api from "../utils/axoisInstance";

const getData = async (page: number) => {
  const { data } = await api.get(`/trending/movie/week`, {
    params: {page},
  });
  return {
    results: data.results as movies[],
    total_pages: data.total_pages,
  };
};

export const useGetData = (page: number) => {
  return useQuery({
    queryKey: ["movies", page],
    queryFn: () => getData(page),
  });
};
