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
    onMutate: async ({ movie, isFav }: { movie: movies; isFav: boolean }) => {
      await queryClient.cancelQueries({ queryKey: ["favorites"] });

      const prevFav = queryClient.getQueryData<movies[]>(["favorites"]) || [];

      queryClient.setQueryData<movies[]>(["favorites"], (old = []) => {
        if (isFav) {
          return [...old, movie];
        } else {
          return old.filter((fav) => fav.id !== movie.id);
        }
      });
      return { prevFav };
    },
    onError: (_error, { movie, isFav }, context) => {
      alert(
        `Failed to ${isFav ? "add" : "remove"} ${movie.title} from favorites.`
      );

      if (context?.prevFav) {
        queryClient.setQueryData(["favorites"], context.prevFav);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
  });
};
