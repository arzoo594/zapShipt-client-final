import { createBrowserRouter } from "react-router";
import RootLayout from "../LayOut/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/services/Services";
import Coverage from "../Pages/Coverage/Coverage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/coverage",
        element: <Coverage />,
        loader: () => fetch("servicesZone.json").then((res) => res.json()),
      },
    ],
  },
]);
