import { Movie } from "../types";

const extractByGenre = (movie: Movie, storage: any) => {
  movie.genres.forEach((genre) => {
    const genreInStorage = storage[genre] || [];
    storage[genre] = [...genreInStorage, movie];
  });
};

export const normalizeDataAndGroupByGenre = (movies: Movie[]) => {
  let storage = {};
  for (let i = 0; i < movies.length; i++) {
    extractByGenre(movies.shift() as Movie, storage);
  }

  return storage;
};
