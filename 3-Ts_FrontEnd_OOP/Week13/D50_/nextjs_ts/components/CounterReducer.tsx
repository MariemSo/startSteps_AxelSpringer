"use client";
import { useContext, useReducer } from "react";
import { LangContext } from "../context/LangWrapper";

type ActionType = {
  type: "rest" | "increment" | "decrement";
};

type StateType = {
  count: number;
};

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "rest":
      return { count: 0 };
    case "decrement":
      return { count: state.count - 1 };
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const CounterReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const lang = useContext(LangContext);

  return (
    <div>
      <div>
        <h2>{lang === "en" ? "Counter with Reducer" : "Zahlen mit Reducer"}</h2>

        <p>
          {lang === "en" ? "The count is :" : "Die Zählung ist"} {state.count}
        </p>
        <div>
          <button onClick={() => dispatch({ type: "rest" })}>Reset</button>
          <button onClick={() => dispatch({ type: "decrement" })}>-</button>
          <button onClick={() => dispatch({ type: "increment" })}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CounterReducer;
