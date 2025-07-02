import type { movies } from "../../type/interface";
import { useGetData } from "../../api-hooks/uesGetData";
import { MdFavorite } from "react-icons/md";
import style from "../../Styles/App.module.scss";
import { useOutletContext } from "react-router-dom";
import { useSearchData } from "../../api-hooks/useSearch";
import { Link } from "react-router-dom";
import { ImSpinner6 } from "react-icons/im";
import { useMutationFav } from "../../api-hooks/usePost-favorite";
import { useGetFav } from "../../api-hooks/useGetFav";

interface OutletContext {
  search: string; // فقط نستخدم السيرش من الكونتكست
}

const Home = () => {
  const { search } = useOutletContext<OutletContext>();

  const { data: favorites = [], refetch: refetchFavorites } = useGetFav();
  const mutation = useMutationFav();

  const searchQuery = useSearchData(search, "multi");
  const generalQuery = useGetData();

  const { data, isLoading, isError } = search.trim()
    ? searchQuery
    : generalQuery;

  const isMovieFav = (movie: movies) =>
    favorites.some((fav) => fav.id === movie.id);

  const handleToggleFavorite = (movie: movies) => {
    const isFav = isMovieFav(movie);
    mutation.mutate(
      { movie, isFav: !isFav },
      {
        onSuccess: () => {
          refetchFavorites();
        },
      }
    );
  };

  if (isLoading)
    return (
      <div className={style["spinner-wrap"]}>
        <ImSpinner6 className={style.spinner} />
      </div>
    );

  if (isError)
    return (
      <div className={style["no-results"]}>
        <p>Failed to load movies.</p>
      </div>
    );

  return (
    <div className={style.container}>
      <div className={style["movie-card"]}>
        {data?.length === 0 && (
          <div className={style["no-results"]}>
            <p>No Results To Show</p>
          </div>
        )}

        {data &&
          data
            .filter((movie) => movie.media_type === "movie")
            .map((movie: movies) => {
              const isFav = isMovieFav(movie);

              return (
                <div key={movie.id} className={style.card}>
                  <button
                    onClick={() => handleToggleFavorite(movie)}
                    type="button"
                    className={style["card-favorit"]}
                    title={isFav ? "Remove from Favorites" : "Add to Favorites"}
                  >
                    <MdFavorite className={isFav ? style.active : ""} />
                  </button>

                  <Link
                    className={style.link}
                    to={`details/${movie.id}/${movie.media_type}`}
                  >
                    <img
                      className={style["card-img"]}
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <span className={style["card-vote"]}>
                      {movie.vote_average.toFixed(1)}
                    </span>
                    <h2 className="card-title">Title : {movie.title}</h2>
                  </Link>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Home;
