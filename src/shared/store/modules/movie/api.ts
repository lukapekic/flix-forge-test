import axios from "axios";

const BASE_URL = "https://dev.flixforge.com/p/test_movies.pl";

export const fetchMovies = () => {
  return axios.get(BASE_URL, {
    headers: {
      Authorization: "Bearer SecretPass", //    can be defined inside interceptor or separate axios instace to avoid code repetition in the future
    },
  });
};

export const fetchSeachMovies = (searchCriteria: string) => {
  return axios.get(`${BASE_URL}?q=${searchCriteria}`, {
    headers: {
      Authorization: "Bearer SecretPass",
    },
  });
};
