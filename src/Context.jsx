import React, { useEffect, useState } from 'react';

import contentDe from './data/content-de.json';
import contentEn from './data/content-en.json';

const Context = React.createContext();

function ContextProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("lang");
    if (!saved) {
      localStorage.setItem("lang", "de");
      return "de";
    }
    return saved;
  });

  const [data, setData] = useState(language === 'de' ? contentDe : contentEn);

  // Function to change language (can be used in a button etc.)
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    setData(language === 'de' ? contentDe : contentEn);
  }, [language]);

  return (
    <Context.Provider value={{ data, language, changeLanguage }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };