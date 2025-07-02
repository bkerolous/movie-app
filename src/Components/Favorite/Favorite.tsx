import { useGetFav } from "../../api-hooks/useGetFav";
import type { movies } from "../../type/interface";
import style from "../../Styles/App.module.scss";

const Favorites = () => {
  const { data: favorite, isLoading, isError, error } = useGetFav();

  if (isLoading) return <p className={style.status}>Loading favorites...</p>;
  if (isError)
    return <p className={style.status}>Error: {(error as Error).message}</p>;

  const favorites: movies[] = favorite || [];

  return (
    <div className={style.container}>
      {favorites.length === 0 && (
        <div className={style["no-favorite"]}>
          <p>No Favorite Added yet.</p>
        </div>
      )}

      <div className={style["movie-card"]}>
        {favorites.map((movie) => (
          <div className={style.card} key={movie.id}>
            <img
              className={style["card-img"]}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <span className={style["card-vote"]}>
              Vote : {movie.vote_average}
            </span>
            <h3 className="card-title">Title : {movie.title}</h3>
            <p className="card-media_type">Media_type : {movie.media_type}</p>
            <p className="card-overview">Overview : {movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
