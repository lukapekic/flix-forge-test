import { FunctionComponent, useCallback } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { Movie } from "../../shared/store/modules/types";
import { MovieCard } from "../MovieCard";
import style from "./MovieLane.module.css";

interface MovieLaneProps extends React.HTMLAttributes<HTMLDivElement> {
  category: string;
  movies: Movie[];
}

export const MovieLane: FunctionComponent<MovieLaneProps> = ({
  category,
  movies,
  className,
  ...rest
}) => {
  const navigate = useNavigate();

  const handleMovieCardClick = useCallback(
    (movieId: string) => navigate(`/movie/${movieId}`),
    []
  );

  return (
    <div className={classNames(style["movielane"], className)}>
      <h3 className={style["movielane__title"]}>{category}</h3>
      <div className={style["moveilane__movies-wrapper"]}>
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              coverImage={movie.backdrop}
              title={movie.title}
              rating={movie.imdb_rating}
              onClick={() => handleMovieCardClick(movie.id)}
              className={style["moveilane__movie-card"]}
            />
          );
        })}
      </div>
    </div>
  );
};
