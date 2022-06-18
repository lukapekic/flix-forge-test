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
    <div className={style["layout"]} {...rest}>
      <Header className={style["layout__header"]} />
      <main className={classNames(style["layout__main"], className)}>
        {children}
      </main>
    </div>
  );
};
