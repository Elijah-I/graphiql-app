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
import LangContext from "context/lang";

import { Auth, Error, Graphiql, Main } from "pages";
import Layout from "layout/Layout";

import "./index.scss";

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
  const [lang, setLang] = React.useState(localStorage.getItem("lang") || "ru");

  const toggleLang = () => {
    const newLang = lang === "ru" ? "en" : "ru";

    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <>
      <CssBaseline />
      <LangContext.Provider
        value={{ language: lang, toggleLanguage: toggleLang }}
      >
        <RouterProvider router={router} />
      </LangContext.Provider>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);

if (process.env.NODE_ENV === "development" && module && module.hot)
  module.hot.accept();
