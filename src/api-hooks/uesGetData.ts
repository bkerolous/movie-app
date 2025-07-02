import type { movies } from "../type/interface";
import { useQuery } from "@tanstack/react-query";
import api from "../utils/axoisInstance";

const getData = async () => {
  const { data } = await api.get(`/trending/movie/week`);
  return data.results as movies[];
};

export const useGetData = () => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: getData,
  });
};
