import classNames from "classnames";
import { FunctionComponent } from "react";
import style from "./MovieCard.module.css";

interface MovieCardProps extends React.HTMLAttributes<HTMLElement> {
  coverImage: string;
  title: string;
  rating: number;
}

export const MovieCard: FunctionComponent<MovieCardProps> = ({
  coverImage,
  rating,
  title,
  className,
  ...rest
}) => {
  return (
    <figure className={classNames(style["moviecard"], className)} {...rest}>
      <h3 className={style["moviecard__title"]}>{title}</h3>
      <p className={style["moviecard__rating"]}>{rating}</p>
    </figure>
  );
};
