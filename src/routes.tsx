import React from "react";
import { createBrowserRouter } from "react-router";
const Home = React.lazy(() => import('./pages/Home'))
const Auth = React.lazy(() => import('./pages/Auth'))


export const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/auth",
      element: <Auth />
    }
  ]
)

