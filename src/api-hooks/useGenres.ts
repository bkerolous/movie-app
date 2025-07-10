import { useQuery } from "@tanstack/react-query";
import api from "../utils/axoisInstance";

interface Genre {
  id: number;
  name: string;
}

const getGenres = async (): Promise<Genre[]> => {
  const { data } = await api.get("/genre/movie/list");
  return data.genres;
};

export const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
  });
};
