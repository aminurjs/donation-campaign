import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";

const MyRoute = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
]);

export default MyRoute;
