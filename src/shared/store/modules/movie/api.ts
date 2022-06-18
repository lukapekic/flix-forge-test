import axios from "axios";
import { BASE_URL } from "../api";

export const fetchMovies = () => {
  return axios.get(BASE_URL, {
    headers: {
      Authorization: "Bearer SecretPass", //    can be defined inside interceptor or separate axios instace to avoid code repetition in the future
    },
  });
};
