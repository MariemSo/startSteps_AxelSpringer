import { useRef, useState } from "react";

interface DemoProps {}

function Counter({}: DemoProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
    //Analogy for ref is
    countRef.current++;

    console.log("State:", count);
    console.log("Ref:", countRef.current);
  };
  return (
    <>
      Count: {count}
      <br />
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
}

export default Counter;
