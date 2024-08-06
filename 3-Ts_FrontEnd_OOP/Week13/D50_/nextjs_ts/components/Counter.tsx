"use client";
import { useContext, useEffect, useState } from "react";
import { LangContext } from "../context/LangWrapper";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const lang = useContext(LangContext);

  return (
    <div>
      <h2>{lang === "en" ? "Counter" : "Zahlen"}</h2>

      <p>
        {lang === "en" ? "The count is :" : "Die Zählung ist"} {count}
      </p>
      <div>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default Counter;
