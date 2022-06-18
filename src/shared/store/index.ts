import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { movieReducer } from "./modules";

const reducer = combineReducers({
  movies: movieReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
