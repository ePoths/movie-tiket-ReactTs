import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import Movie from "./pages/movie";
import MovieInfo from "./pages/movieInfo";
import Time from "./pages/time";

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
    path: "/movie/:movieNm",
    element: <MovieInfo />,
  },
]);

export default router;
