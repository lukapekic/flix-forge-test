import type { Dispatch } from "redux";
import { Movie } from "../types";
import { SET_MOVIES } from "./actionTypes";
import { fetchMovies } from "./api";

const setMovies = (movies: Movie[]) => {
  return {
    type: SET_MOVIES,
    payload: movies,
  };
};

export const getMovies = () => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await fetchMovies();
      dispatch(setMovies(data.movies));
    } catch (error) {
      console.error(error);
      dispatch(setMovies([]));
    }
  };
};
