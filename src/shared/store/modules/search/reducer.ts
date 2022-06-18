import { SearchModuleState } from "./types";
import { Action } from "../types";

const initalState: SearchModuleState = [];

export const searchReducer = (
  state: SearchModuleState = initalState,
  action: Action
) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
