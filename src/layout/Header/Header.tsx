import classNames from "classnames";
import { FunctionComponent } from "react";
import style from "./Header.module.css";

interface HeaderComponentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Header: FunctionComponent<HeaderComponentProps> = ({
  className,
  ...rest
}) => {
  return (
    <header className={classNames(style["header"], className)} {...rest}>
      HEADER
    </header>
  );
};
