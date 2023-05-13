import * as React from "react";

const LangContext = React.createContext({
  language: "",
  toggleLanguage: () => {}
});

export default LangContext;
