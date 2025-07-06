import { useParams } from "react-router-dom";
import { useDetails } from "../../api-hooks/useDetails";
import style from "./Details.module.scss";
import { ImSpinner6 } from "react-icons/im";

const Details = () => {
  const { id, media_type } = useParams();
  const movieId = Number(id);
  const movieType = media_type as string;
  const { data, isError, isLoading, error } = useDetails(movieId, movieType);
  if (isLoading)
    return (
      <div className={`${style["spinner-wrap"]}`}>
        <ImSpinner6 className={`${style.spinner}`} />
      </div>
    );
  if (isError) return <p>{(error as Error).message}</p>;
  console.log(data);

  return (
    <>
      {
        <div className={`${style.container}`}>
          <div className={`${style["card"]}`}>
            <div className={`${style["card-movie"]}`}>
              <div>
                <img
                  className={`${style["card-img"]}`}
                  src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
                  alt={data?.title}
                />
              </div>

              <div className={`${style["card-details"]}`}>
                <h3>
                  <span className={`${style["text-size"]}`}>Title : </span>
                  {data?.title}
                </h3>
                <p>
                  <span className={`${style["text-size"]}`}>
                    Permissible Age:{" "}
                  </span>
                  {data?.adult ? "+ 16" : "+ 10"}
                </p>
                <p>
                  <span className={`${style["text-size"]}`}>Vote : </span>
                  {data?.vote_average.toFixed(1)}
                </p>
                <p className="card-media_type">
                  <span className={`${style["text-size"]}`}>Genres : </span>
                  {data?.genres[0].name}, {data?.genres[1].name},{" "}
                  {data?.genres[2].name}
                </p>
                <p className="card-overview">
                  <span className={`${style["text-size"]}`}>Over View : </span>
                  {data?.overview}
                </p>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Details;
