import { SEARCH_MOVIES } from "./actionTypes";

export const searchMovies = (searchCriteria: string) => {
  return {
    type: SEARCH_MOVIES,
    payload: searchCriteria,
  };
};
