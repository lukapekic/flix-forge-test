export interface Action {
  type: string;
  payload: any;
}

export interface Movie {
  realased_on: Date;
  cast: string[];
  backdrop: string;
  director: string;
  overview: string;
  length: string;
  genres: string;
  slug: string;
  title: string;
  classification: string;
  id: string;
  imdb_rating: number;
  poster: string;
}

export type MovieModuleState = Movie[];
