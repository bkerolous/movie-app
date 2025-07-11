import { useQuery } from "@tanstack/react-query";
import api from "../utils/axoisInstance";

export interface Genre {
  id: number;
  name: string;
}

const fetchGenres = async (): Promise<Genre[]> => {
  const { data } = await api.get("/genre/movie/list");
  return data.genres;
};

export const useGenres = () => {
  return useQuery<Genre[]>({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: 1000 * 60 * 60,
    retry: 1,
  });
};
