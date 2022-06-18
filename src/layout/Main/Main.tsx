import classNames from "classnames";
import { FunctionComponent } from "react";
import { Header } from "../Header";
import style from "./Main.module.css";

interface MainLaytouProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Main: FunctionComponent<MainLaytouProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div className={classNames(style["layout"], className)} {...rest}>
      <Header className={style["layout__header"]} />
      <main className={style["layout__main"]}>{children}</main>
    </div>
  );
};
