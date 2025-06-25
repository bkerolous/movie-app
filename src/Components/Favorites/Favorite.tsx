import { useOutletContext } from "react-router-dom";
import type { movies } from "../../type/interface";
import { MdFavorite } from "react-icons/md";
import style from "../../Styles/App.module.scss";
interface OutletContext {
  favorites: movies[];
  toggleFavorite: (movie: movies) => void;
}
const Favorites = () => {
  const { favorites, toggleFavorite } = useOutletContext<OutletContext>();
  const isMovieFav = (movie: movies) =>
    favorites.some((fav) => fav.id === movie.id);

  return (
    <>
      <div className={`${style.container}`}>
        {favorites.length === 0 && (
          <div className={`${style['no-favorite']}`}>
            <p>No Favorite Added yet.</p>
          </div>
        )}
        <div className={`${style["movie-card"]}`}>
          {favorites &&
            favorites.map((movie: movies) => (
              <div className={`${style.card}`} key={movie.id}>
                <img
                  className={`${style["card-img"]}`}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
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
                <span className={`${style["card-vote"]}`}>
                  Vote : {movie.vote_average}
                </span>
                <h3 className="card-title">Title : {movie.title}</h3>
                <p className="card-media_type">
                  Media_type : {movie.media_type}
                </p>
                <p className="card-overview">Overview : {movie.overview}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Favorites;
