import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Main } from "../../layout";
import { getSelctedMoviesSelector } from "../../shared/store/modules";
import { MovieModuleState } from "../../shared/store/modules/movie/types";
import { Movie as MovieType } from "../../shared/store/modules/types";

export const Movie: FunctionComponent = () => {
  const location = useLocation();
  const selectedMovie = useSelector((state: MovieModuleState) =>
    getSelctedMoviesSelector(state, "1")
  ) as MovieType;

  const { title, imdb_rating, length, director, cast, overview, poster } =
    selectedMovie;

  return (
    <Main>
      <div>
        <img src={poster} alt={title} loading="lazy" />
        <div>
          <h2>
            {title} ({imdb_rating})
          </h2>
          <p>
            {length} | {director}
          </p>
          <p>Cast: {...cast}</p>
          <p>Movie Description: {overview}</p>
        </div>
      </div>
    </Main>
  );
};
