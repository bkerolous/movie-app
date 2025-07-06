import type { movies } from "../../type/interface";
import { useGetData } from "../../api-hooks/uesGetData";
import { MdFavorite } from "react-icons/md";
import style from "../../Styles/App.module.scss";
import { useOutletContext } from "react-router-dom";
import { useSearchData } from "../../api-hooks/useSearch";
import { Link } from "react-router-dom";
import { ImSpinner6 } from "react-icons/im";
import { useGetFav } from "../../api-hooks/useGetFav";
import { useMutationFav } from "../../api-hooks/usePost-favorite";

interface OutletContext {
  search: string;
}

const Home = () => {
  const { search } = useOutletContext<OutletContext>();

  const { data: favorites = [] } = useGetFav();
  const { mutate } = useMutationFav();

  const searchQuery = useSearchData(search, "multi");
  const generalQuery = useGetData();

  const { data, isLoading, isError, error } = search.trim()
    ? searchQuery
    : generalQuery;

  const isMovieFav = (movie: movies) =>
    favorites.some((fav) => fav.id === movie.id);

  if (isLoading)
    return (
      <div className={`${style["spinner-wrap"]}`}>
        <ImSpinner6 className={`${style.spinner}`} />
      </div>
    );
  if (isError) return <p>{(error as Error).message}</p>;

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
              const fav = isMovieFav(movie);
              return (
                <div key={movie.id} className={style.card}>
                  <button
                    onClick={() =>
                      mutate({
                        movie,
                        isFav: !fav,
                      })
                    }
                    type="button"
                    className={style["card-favorit"]}
                    title={fav ? "Remove From Favorite" : "Add To Favorite"}
                  >
                    <MdFavorite
                      className={`${style.icon} ${fav ? style.active : ""}`}
                    />
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
