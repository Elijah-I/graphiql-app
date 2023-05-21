import React from "react";

import LangContext from "context/lang";

type Locale = Record<string, string>;

const useLanguage = (file: string): Locale => {
  const { language } = React.useContext(LangContext);
  const [locale, setlocale] = React.useState<Locale>({});

  React.useEffect(() => {
    const getLocale = async () => {
      const locale = require(`./../lang/${file}.${language}.json`);
      setlocale(locale);
    };

    getLocale();
  }, [language]);

  return locale;
};

export default useLanguage;
