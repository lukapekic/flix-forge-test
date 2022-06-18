import classNames from "classnames";
import { FunctionComponent } from "react";
import style from "./MovieCard.module.css";

interface MovieCardProps extends React.HTMLAttributes<HTMLElement> {
  coverImage: string;
  title: string;
  rating: number;
}

const IMAGE_BASEDROP_URL = "https://dev.flixforge.com";

export const MovieCard: FunctionComponent<MovieCardProps> = ({
  coverImage,
  rating,
  title,
  className,
  ...rest
}) => {
  console.log(coverImage);
  return (
    <figure
      className={classNames(style["moviecard"], className)}
      style={{ backgroundImage: `url(${IMAGE_BASEDROP_URL}${coverImage})` }}
      {...rest}
    >
      <div className={style["moviecard__info-wrapper"]}>
        <h3 className={style["moviecard__title"]}>{title}</h3>
        <p className={style["moviecard__rating"]}>{rating}</p>
      </div>
    </figure>
  );
};
