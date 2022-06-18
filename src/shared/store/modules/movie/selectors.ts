import { MovieModuleState } from "./types";

export const getMoviesSelector = (state: MovieModuleState) => {
  return state.movies;
};
