import type { movies } from "../type/interface";
import { useQuery } from "@tanstack/react-query";
import api from "../utils/axoisInstance";

const getDetails = async (id: number, media_type: string) => {
  const { data } = await api.get(`movie/${id}:${media_type}?append_to_response=videos`)
  return data as movies;
};

export const useDetails = (id: number, media_type: string) => {
  return useQuery({
    queryKey: ["details", id, media_type],
    queryFn: () => getDetails(id, media_type),
  });
};
