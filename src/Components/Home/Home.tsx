import type { movies } from "../../type/interface";
import { useGetData } from "../../api-hooks/uesGetData";
import { MdFavorite } from "react-icons/md";
import style from "../../Styles/App.module.scss";
import { useOutletContext } from "react-router-dom";
import { useSearchData } from "../../api-hooks/useSearch";
import { Link } from "react-router-dom";
import { ImSpinner6 } from "react-icons/im";

interface OutletContext {
  favorites: movies[];
  toggleFavorite: (movie: movies) => void;
  search: string;
}

const Home = () => {
  const { favorites, toggleFavorite, search } =
    useOutletContext<OutletContext>();

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
    <>
      <div className={`${style.container}`}>
        <div className={`${style["movie-card"]}`}>
          {data?.length === 0 && (
            <div className={`${style["no-results"]}`}>
              <p>No Results To Show</p>
            </div>
          )}
          {data &&
            data
              .filter((movie) => movie.media_type === "movie")
              .map((movie: movies) => (
                <div key={movie.id} className={`${style.card}`}>
                  <button
                    onClick={() => toggleFavorite(movie)}
                    type="button"
                    className={`${style["card-favorit"]}`}
                    title="Add To Favorite"
                  >
                    <MdFavorite
                      className={isMovieFav(movie) ? style.active : ""}
                    />
                  </button>
                  <Link
                    className={`${style.link}`}
                    to={`details/${movie.id}/${movie.media_type}`}
                    key={movie.id}
                  >
                    <img
                      className={`${style["card-img"]}`}
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                    />

                    <span className={`${style["card-vote"]}`}>
                      {movie.vote_average.toFixed(1)}
                    </span>
                    <h2 className="card-title">Title : {movie.title}</h2>
                  </Link>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default Home;
