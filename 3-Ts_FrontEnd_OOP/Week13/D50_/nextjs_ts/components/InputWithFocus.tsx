"use client";
import { useRef, useContext } from "react";
import { LangContext } from "../context/LangWrapper";

const InputWithFocus: React.FC = () => {
  const inputEvent = useRef<HTMLInputElement>(null);
  const lang = useContext(LangContext);
  const onFocusClick = () => {
    if (inputEvent && inputEvent.current) {
      inputEvent.current.focus();
    }
  };

  return (
    <>
      <h2>{lang === "en" ? "Focus Element :" : "Fokuselement:"}</h2>
      <input type="text" ref={inputEvent} />
      <button onClick={onFocusClick}>
        {lang === "en" ? "Focus The input :" : "Fokussieren Sie die Eingabe:"}
      </button>
    </>
  );
};

export default InputWithFocus;
