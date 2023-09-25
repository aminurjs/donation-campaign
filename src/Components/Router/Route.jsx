import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../Pages/Home/Home";
import Details from "../../Pages/Details/Details";
import Donation from "../../Pages/Donation/Donation";
import Statistics from "../../Pages/Statistics/Statistics";

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
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

export default MyRoute;
