"use client";

import { createContext, PropsWithChildren, useState } from "react";

type Lang = "en" | "de";

export const LangContext = createContext<Lang>("en");

const LangWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LangContext.Provider value={lang}>
      <h1 className="text-3xl font-bold underline">
        The Current Language is {lang}
      </h1>
      <button onClick={() => setLang("en")}>EN</button>
      <button onClick={() => setLang("de")}>DE</button>
      {children}
    </LangContext.Provider>
  );
};
export default LangWrapper;
