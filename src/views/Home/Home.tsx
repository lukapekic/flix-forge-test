import { FunctionComponent, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMoviesSelector, getMovies } from "../../shared/store/modules";
import { MovieCard } from "../../components";

export const Home: FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector(getMoviesSelector) || [];

  console.log(Object.entries(movies));

  useEffect(() => {
    //@ts-ignore
    dispatch(getMovies());
    return () => {
      // cleanup if needed later
    };
  }, []);

  const handleMovieCardClick = useCallback(
    (movieId: string) => navigate(`/movie/${movieId}`),
    []
  );

  return (
    <div>
      {/* {movies.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            coverImage={movie.backdrop}
            title={movie.title}
            rating={movie.imdb_rating}
            onClick={() => handleMovieCardClick(movie.id)}
          />
        );
      })} */}
    </div>
  );
};
