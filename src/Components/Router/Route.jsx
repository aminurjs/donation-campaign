import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../Pages/Home/Home";
import Details from "../../Pages/Details/Details";

const MyRoute = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/details/:id",
        element: <Details></Details>,
      },
    ],
  },
]);

export default MyRoute;
