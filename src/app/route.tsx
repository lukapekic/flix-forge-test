import { Home, Movie } from "../views";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
];
