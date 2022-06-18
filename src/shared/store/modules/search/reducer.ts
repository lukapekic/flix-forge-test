import { SearchModuleState } from "./types";
import { Action } from "../types";
import { SET_SEARCH_RESULT } from "./actionTypes";

const initalState: SearchModuleState = [];

export const searchReducer = (
  state: SearchModuleState = initalState,
  action: Action
) => {
  switch (action.type) {
    case SET_SEARCH_RESULT:
      return action.payload;
    default: {
      return state;
    }
  }
};
