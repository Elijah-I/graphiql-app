import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import { ROUTING } from "types/routing";

import { Auth, Error, Graphiql, Main } from "pages";
import Layout from "layout/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={ROUTING.MAIN}
      element={<Layout />}
    >
      <Route
        index
        element={<Main />}
      />
      <Route
        path={ROUTING.AUTH}
        element={<Auth />}
      />
      <Route
        path={ROUTING.GRAPHIQL}
        element={<Graphiql />}
      />
      <Route
        path="*"
        element={<Error />}
      />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);

if (process.env.NODE_ENV === "development" && module && module.hot)
  module.hot.accept();
