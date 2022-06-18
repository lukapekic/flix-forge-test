import { Movie } from "../types";
import { SET_SEARCH_RESULT } from "./actionTypes";

import type { Dispatch } from "redux";
import { fetchSeachMovies } from "./api";

const setSearchResult = (movies: Movie[]) => {
  return {
    type: SET_SEARCH_RESULT,
    payload: movies,
  };
};

export const getMoviesSearch = (searchCriteria: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await fetchSeachMovies(searchCriteria);
      dispatch(setSearchResult(data.movies));
    } catch (error) {
      console.error(error);
      dispatch(setSearchResult([]));
    }
  };
};
