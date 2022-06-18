import { combineReducers, createStore } from "redux";
import { movieReducer } from "./modules";

const reducer = combineReducers({
  movies: movieReducer,
});

export const store = createStore(reducer);
