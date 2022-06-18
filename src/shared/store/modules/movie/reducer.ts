import { Action, MovieModuleState } from "./types";

const initalState: MovieModuleState = [];

export const movieReducer = (
  state: MovieModuleState = initalState,
  action: Action
) => {
  switch (action.type) {
    case "": {
    }
    default: {
    }
  }
};
