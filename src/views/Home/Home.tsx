import { FunctionComponent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMoviesSelector, getMovies } from "../../shared/store/modules";
import { MovieLane } from "../../components";
import { Main } from "../../layout";
import style from "./Home.module.css";

export const Home: FunctionComponent = () => {
  const dispatch = useDispatch();
  const movies = useSelector(getMoviesSelector) || [];

  useEffect(() => {
    //@ts-ignore
    dispatch(getMovies());
    return () => {
      // cleanup if needed later
    };
  }, []);

  return (
    <Main className={style["homepage"]}>
      {Object.entries(movies).map((categories) => {
        //@ts-ignore
        return <MovieLane category={categories[0]} movies={categories[1]} />;
      })}
    </Main>
  );
};
