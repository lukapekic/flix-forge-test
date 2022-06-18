import classNames from "classnames";
import { FormEvent, FunctionComponent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { getMoviesSearch } from "../../shared/store/modules/search/action";
import style from "./Header.module.css";

interface HeaderComponentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Header: FunctionComponent<HeaderComponentProps> = ({
  className,
  ...rest
}) => {
  const dispatch = useDispatch();
  const handleSearchSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
    dispatch(
      //@ts-ignore
      getMoviesSearch(
        (event.currentTarget.children[0] as HTMLInputElement).value
      )
    );
  }, []);

  return (
    <header className={classNames(style["header"], className)} {...rest}>
      <h1>WOOK MOVIES</h1>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search for a movie..."
          className={style["header__search-bar"]}
        />
      </form>
    </header>
  );
};
