import { MovieModuleState } from "./types";

export const getMoviesSelector = (state: MovieModuleState) => {
  return state.movies;
};

export const getSelctedMoviesSelector = (
  state: MovieModuleState,
  selectedMovieId: string
) => {
  return state.movies.find((movie) => movie.id === selectedMovieId);
};
