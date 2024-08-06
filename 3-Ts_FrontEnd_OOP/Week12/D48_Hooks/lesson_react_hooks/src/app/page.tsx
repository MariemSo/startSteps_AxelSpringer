"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [color, setColor] = useState("red");
  const [colorCode, setColorCode] = useState("#ff0000");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (color === "blue") {
      setColorCode("#00ff00");
    }
  }, [color]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>
        The color is {color} and it is {colorCode}
      </p>
      <br />
      <button
        type="button"
        onClick={() => {
          setColor("blue");
        }}
      >
        Change Color
      </button>
      <h5>the Count is {count}</h5>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        type="button"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </main>
  );
}
