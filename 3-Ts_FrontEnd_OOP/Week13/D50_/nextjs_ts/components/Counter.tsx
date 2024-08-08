"use client";
import { useContext, useEffect, useState } from "react";
import { LangContext } from "../context/LangWrapper";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  const lang = useContext(LangContext);

  useEffect(() => {
    // Set up a timer
    const timer = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    // Cleanup function to clear the timer
    return () => {
      clearInterval(timer);
      console.log("Timer cleaned up");
    };
  }, []); // Empty dependency array means this effect runs only once

  return (
    <div>
      <h2>{lang === "en" ? "Counter" : "Zahlen"}</h2>

      <p>
        {lang === "en" ? "The count is :" : "Die Zählung ist"} {count}
      </p>
      <p> Timer :{timer}</p>
      <div>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default Counter;
