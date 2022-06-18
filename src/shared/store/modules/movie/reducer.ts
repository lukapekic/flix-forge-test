import { MovieModuleState } from "./types";
import { Action } from "../types";
import { SET_MOVIES } from "./actionTypes";
import { normalizeDataAndGroupByGenre } from "./utils";

const initalState: MovieModuleState = { movies: [] };

export const movieReducer = (
  state: MovieModuleState = initalState,
  action: Action
) => {
  switch (action.type) {
    case SET_MOVIES: {
      return normalizeDataAndGroupByGenre(action.payload);
    }
    default: {
      return state;
    }
  }
};
