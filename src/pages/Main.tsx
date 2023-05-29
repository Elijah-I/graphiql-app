import useLanguage from "hooks/useLanguage";
import React from "react";
import "./Main.scss";

const Main = () => {
  const locale = useLanguage('main')
  return (
    <main className="main">
      <p>{locale.main}</p>
      <p>{locale.main2}</p>
      <p>{locale.main3}</p>
      <p>{locale.project}</p>
      <p>{locale.graphqli}</p>
      <p>{locale.create}</p>
      <p>{locale.reps}</p>
    </main>
  );
};

export default Main;
