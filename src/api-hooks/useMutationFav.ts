import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { movies } from "../type/interface";
import api, { accountId } from "../utils/axoisInstance";

const postFav = async ({ movie, isFav }: { movie: movies; isFav: boolean }) => {
  await api.post(`account/${accountId}/favorite`, {
    media_type: "movie",
    media_id: movie.id,
    favorite: isFav,
  });

  return { movie, isFav };
};

export const useMutationFav = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postFav,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
    onError: (error, { movie, isFav }) => {
      console.error(
        `❌ Failed to ${isFav ? "add" : "remove"} ${
          movie.title
        } from favorites.`,
        error
      );
      alert(
        `❌ Failed to ${isFav ? "add" : "remove"} favorite. Check console.`
      );
    },
  });
};
