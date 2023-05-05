import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Movie from "./movie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Movie />,
  },
  {
    path: "/time",
    element: <App />,
  },
]);

export default router;
