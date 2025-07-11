import { MdFavorite } from "react-icons/md";
import style from "../../Styles/App.module.scss";
import { useMutationFav } from "../../api-hooks/useMutationFav";
import { useGetFav } from "../../api-hooks/useGetFav";
import type { movies } from "../../type/interface";
import { ImSpinner6 } from "react-icons/im";

const Favorites = () => {
  const { data: favorites = [], isLoading, isError, error } = useGetFav();
  const { mutate } = useMutationFav();

  const handleToggleFavorite = (movie: movies) => {
    mutate({ movie, isFav: false });
  };

  if (isLoading) {
    return (
      <div className={`${style["spinner-wrap"]}`}>
        <ImSpinner6 className={`${style.spinner}`} />
      </div>
    );
  }

  if (isError) return <p>{(error as Error).message}</p>;

  return (
    <div className={`${style.container}`}>
      {favorites.length === 0 && (
        <div className={`${style["no-favorite"]}`}>
          <p>No Favorite Added yet.</p>
        </div>
      )}
      <div className={`${style["movie-card"]}`}>
        {favorites.map((movie: movies) => (
          <div className={`${style.card}`} key={movie.id}>
            <img
              className={`${style["card-img"]}`}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <button
              onClick={() => handleToggleFavorite(movie)}
              type="button"
              className={`${style["card-favorit"]}`}
              title="Remove From Favorite"
            >
              <MdFavorite className={`${style.active}`} />
            </button>
            <h3>Title : {movie.title}</h3>
            <p>
              <span>Permissible Age: </span>
              {movie?.adult ? "+ 16" : "+ 10"}
            </p>
            <span>Vote : {movie.vote_average.toFixed(1)}</span>
            <p>Overview : {movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
