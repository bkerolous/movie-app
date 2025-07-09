import { useState } from "react";
import { useOutletContext, Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { ImSpinner6 } from "react-icons/im";
import style from "../../Styles/App.module.scss";
import { useGetData } from "../../api-hooks/uesGetData";
import { useSearchData } from "../../api-hooks/useSearch";
import { useGetFav } from "../../api-hooks/useGetFav";
import { useMutationFav } from "../../api-hooks/usePost-favorite";
import type { movies } from "../../type/interface";

interface OutletContext {
  search: string;
}

const Home = () => {
  const [page, setPage] = useState(1);
  const { search } = useOutletContext<OutletContext>();
  const isSearch = search.trim().length > 0;

  const { data: favorites = [] } = useGetFav();
  const { mutate } = useMutationFav();

  const {
    data: searchData,
    isLoading: isSearchLoading,
    isError: isSearchError,
    error: searchError,
  } = useSearchData(search, "multi");

  const {
    data: generalData,
    isLoading: isGeneralLoading,
    isError: isGeneralError,
    error: generalError,
  } = useGetData(page);

  const moviesData: movies[] | undefined = isSearch
    ? searchData
    : generalData?.results;
  const totalPages =
    !isSearch && generalData?.total_pages ? generalData.total_pages : 1;
  const isLoading = isSearch ? isSearchLoading : isGeneralLoading;
  const isError = isSearch ? isSearchError : isGeneralError;
  const error = isSearch ? searchError : generalError;

  const isMovieFav = (movie: movies) =>
    favorites.some((fav) => fav.id === movie.id);

  if (isLoading)
    return (
      <div className={style["spinner-wrap"]}>
        <ImSpinner6 className={style.spinner} />
      </div>
    );

  if (isError) return <p>{(error as Error).message}</p>;

  return (
    <div className={style.container}>
      <div className={style["movie-card"]}>
        {moviesData?.length === 0 && (
          <div className={style["no-results"]}>
            <p>No Results To Show</p>
          </div>
        )}

        {moviesData &&
          moviesData
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

      {!isSearch && (
        <div className={style.pagination}>
          {Array.from({ length: Math.min(totalPages, 10) }, (_, i) => (
            <button
              type="button"
              key={i + 1}
              onClick={() => {
                setPage(i + 1);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className={`${style.pageBtn} ${
                page === i + 1 ? style.activePage : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
