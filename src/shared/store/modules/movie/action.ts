import { GET_MOVIES, SEARCH_MOVIES } from "./actionTypes";

export const getMovies = () => {
  return {
    type: GET_MOVIES,
  };
};

export const searchMovies = (searchCriteria: string) => {
  return {
    type: SEARCH_MOVIES,
    payload: searchCriteria,
  };
};
