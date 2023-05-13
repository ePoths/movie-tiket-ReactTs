import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import Time from "./pages/time";
import Movie from "./pages/movie";
import MovieInfo from "./pages/movieInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movie",
    element: <Movie />,
  },
  {
    path: "/time",
    element: <Time />,
  },
  {
    path: "/time/:movieNm",
    element: <Time />,
  },
  {
    path: "/movie/:movieNm",
    element: <MovieInfo />,
  },
]);

export default router;
