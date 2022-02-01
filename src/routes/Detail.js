import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState([]);
  const getMovie = async () => {
    const movieInfoJson = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieInfo(movieInfoJson.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{movieInfo.title_long}</h1>
          <img src={movieInfo.medium_cover_image} alt={movieInfo.title} />
          <div>Rating: {movieInfo.rating}</div>
          <div>
            Genre:
            {
              <ul>
                <li>
                  {movieInfo.genres.map((genres) => (
                    <li>{genres}</li>
                  ))}
                </li>
              </ul>
            }
            <div>{movieInfo.description_intro}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
