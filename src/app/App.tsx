import { FunctionComponent } from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import { routes } from "./route";

export const App: FunctionComponent = () => {
  const routesToRender = useRoutes(routes);
  return routesToRender;
};
