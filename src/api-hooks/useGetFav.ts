import { useQuery } from "@tanstack/react-query";
import type { movies } from "../type/interface";
import api, { accountId } from "../utils/axoisInstance";

const getFav = async () => {
  const { data } = await api.get(`account/${accountId}/favorite/movies`);

  return data.results as movies[];
};

export const useGetFav = () => {
  return useQuery({
    queryKey: ["favorites"],
    queryFn: getFav,
  });
};
