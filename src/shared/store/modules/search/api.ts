import axios from "axios";
import { BASE_URL } from "../api";

export const fetchSeachMovies = (searchCriteria: string) => {
  return axios.get(`${BASE_URL}?q=${searchCriteria}`, {
    headers: {
      Authorization: "Bearer SecretPass",
    },
  });
};
